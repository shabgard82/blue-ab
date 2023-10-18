import { Button, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CardDrawer from "../carddrawer/card-drawer";
import { addToCard } from "../../redux/slice/card-slice";
import { useDispatch } from "react-redux";
import { update as updateCardNumber } from "../../redux/slice/active-card-slice";

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^\d{16}$/, "Card number must be a 16-digit number"),
});

function NormalCharge() {
  const [cartnumber, setCartNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    // dispatch(addToCard(cartnumber))
    dispatch(updateCardNumber({ cardNumber: cartnumber }));
    navigate("/meghdar-afzayesh");
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <Formik
      initialValues={{ cardNumber: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.all}>
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
          <Stack>
            <Typography pt={2} pl={1}>
              Enter the bank card number
            </Typography>
            {/* <Field
              type="text"
              name="cardNumber"
              placeholder="16-digit card number"
              className={styles.input}
            /> */}
            <div className={styles.input}>
              <input
                onChange={(event) => setCartNumber(event.target.value)}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
                placeholder="16-digit card number"
              />
              <Stack display="flex" direction="row">
                <Button
                  varient="contained"
                  onClick={() => dispatch(addToCard(cartnumber))}
                  sx={{ fontWeight: "600", color: "blue" }}
                >
                  save
                </Button>
                <CardDrawer />
              </Stack>
            </div>
            <ErrorMessage name="cardNumber" component="div" />
          </Stack>
        </Stack>
        <Stack pb={2}>
          <Button variant="contained" onClick={handleSubmit}>
            Continuation
          </Button>
        </Stack>
      </Form>
    </Formik>
  );
}

export default NormalCharge;
