import { Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import CardDrawer from "../carddrawer/card-drawer";
import { useNavigate } from "react-router-dom";
import { submit as submitTransaction } from "../../redux/slice/transaction-slice";
import { update as updateCardDate } from "../../redux/slice/active-card-slice";

function AfzayeshMojodi() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/meghdar-afzayesh");
  const [cartdate, setCartDate] = useState("");
  const dispatch = useDispatch();
  const { cardDate } = useSelector((state) => state.cardSlice);
  const { Money } = useSelector((state) => state.maliSlice);
  const { activeCard } = useSelector((state) => state.activeCardSlice);
  const handleCartDateChange = (e) => {
    setCartDate(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      submitTransaction({
        amount: Money,
        datetime: new Date(),
        cardNumber: activeCard.cardNumber,
      })
    );
    navigate("/fish-pardakht");
  };

  return (
    <Stack
      display="flex"
      direction="column"
      height="100vh"
      justifyContent="space-between"
    >
      <Stack pl={1.5} pr={1.5}>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <IconButton sx={{ color: "#4d94ff" }}>
              <ArrowBackIcon onClick={handleBack} />
            </IconButton>
          </Stack>
          <Typography>Inventory increase</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack>
          <Typography pt={2} pl={1}>
            Enter the bank card number
          </Typography>
        </Stack>
        <Stack>
          <Typography
            pt={1}
            pl={2}
            sx={{ color: "#666666" }}
            fontWeight={600}
            fontSize={13}
          >
            card number
          </Typography>
          <div className={styles.input}>
            <input
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
              }}
            ></input>
            <CardDrawer />
          </div>
        </Stack>
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          pt={2}
          spacing={2}
        >
          <Stack display="flex" direction="column">
            <Typography pl={2} fontWeight={600} fontSize={13} pb={1}>
              CVV2
            </Typography>
            <input className={styles.input1} placeholder="password" />
          </Stack>

          <Stack display="flex" direction="column">
            <Typography fontWeight={600} fontSize={13} pl={2} pb={1}>
              Expiration date
            </Typography>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-around"
              className={styles.inputContainer}
            >
              <input
                placeholder="Year/Month"
                onChange={handleCartDateChange}
                className={styles.input1}
              />
              <Button
                sx={{ fontSize: "12px" }}
                onClick={() => dispatch(updateCardDate({date: cartdate}))}
              >
                save
              </Button>
            </Stack>
          </Stack>

          {cardDate.map((item) => (
            <h3
              style={{
                backgroundColor: "yellow",
                border: "2px solid black",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              {item}
            </h3>
          ))}
        </Stack>

        <Stack pt={2} display="flex" direction="row" alignItems="center">
          <Stack display="flex" direction="column">
            <Typography pl={2} fontWeight={600} fontSize={13} pb={1}>
              second password
            </Typography>
            <input className={styles.input1} placeholder="password" />
          </Stack>

          <Stack pl={4} pt={4}>
            <Typography
              fontSize={12}
              fontWeight={600}
              sx={{ color: "#5c00e6" }}
            >
              Dynamic password request
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack pl={1} pr={1} pb={2}>
        <Button variant="contained" onClick={handleSubmit}>
          Continuation
        </Button>
      </Stack>
    </Stack>
  );
}

export default AfzayeshMojodi;
