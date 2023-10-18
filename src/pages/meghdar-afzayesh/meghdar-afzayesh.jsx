import { Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import afzayesh from "../../images/afzayesh.jpg";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMoney } from "../../redux/slice/mali-slice";

function MeghdarAfzayesh() {
  const [money, setMoney] = useState("0");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handle = () => {
    navigate("/afzayesh");
    dispatch(addMoney(money));
  };
  const handleBack = () => navigate("/normal-charge");
  return (
    <Stack
      display="flex"
      direction="column"
      height={"100vh"}
      justifyContent="space-between"
    >
      <Stack>
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
        <Stack display="flex" direction="row" justifyContent="center" pt={3}>
          <img src={afzayesh} alt="profile" width="80px" height="70px" />
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: "600", textAlign: "center" }}>
            Erfan Shabgard
          </Typography>
          <Typography
            sx={{ textAlign: "center", color: "gray", fontSize: "14px" }}
          >
            IR-14 0560 6118 2800 5528 6683 01
          </Typography>
          <input
            className={styles.input}
            placeholder="Deposit amount"
            onChange={(event) => setMoney(event.target.value)}
          />
        </Stack>
      </Stack>
      <Stack pl={1} pr={1} pb={2}>
        <Button variant="contained" onClick={handle}>
          Continuation
        </Button>
      </Stack>
    </Stack>
  );
}

export default MeghdarAfzayesh;
