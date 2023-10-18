import React from "react";
import IconButton from "@mui/material/IconButton";
import { Stack, Typography, sliderClasses } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles.module.css";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";

function InviteCode() {
  const navigate = useNavigate();
  const handleClik = () => navigate("/national-code");
  const handleBack = () => navigate("/sms-code");
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
        <Typography pt={2}>Enter your invite code</Typography>
        <input className={styles.input} placeholder="like : MDMGKP"></input>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        className={styles.btn}
        pb={3}
      >
        <IconButton sx={{ backgroundColor: "#4d94ff", color: "white" }}>
          <ArrowForwardIcon
            onClick={handleClik}
            sx={{ width: "30px", height: "30px" }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
}
export default InviteCode;
