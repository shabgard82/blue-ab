import React from "react";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiDrawer from "../bottom-drawer/drawer";


function PhoneNumber() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/sms-code");
  const handleBack = () => navigate("/open-account");
  return (
    <Stack className={styles.all}>
      <Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton sx={{ color: "#4d94ff" }}>
            <ArrowBackIcon onClick={handleBack} />
          </IconButton>
          <Typography>Create account</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Typography pt={2}>Enter your phone number</Typography>
        <input
          className={styles.input}
          placeholder="like:98 939 537 7024"
        ></input>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pb={3}
      >
        <Typography>confirmation code will be sent</Typography>
        <Stack>
          <IconButton sx={{ backgroundColor: "#4d94ff", color: "white" }}>
            <ArrowForwardIcon
              onClick={handleClick}
              sx={{ width: "30px", height: "30px" }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default PhoneNumber;
