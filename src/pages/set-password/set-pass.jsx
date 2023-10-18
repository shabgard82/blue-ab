import React from "react";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiDrawer from "../bottom-drawer/drawer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerticalLinearStepperPass from "../../components/steper-password";

function SetPassword() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/create-username");
  const handle = () => navigate("/fingerprint");
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
        <Typography pt={2}>Choose a secure password for yourself</Typography>
        <input
          type="password"
          className={styles.input}
          placeholder="password"
        ></input>
        <Stack pt={2}>
          <VerticalLinearStepperPass onClick={handleBack} />
        </Stack>
      </Stack>

      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pb={3}
      >
        <Typography>
          Your password is the same as your bank password !
        </Typography>
        <Stack>
          <IconButton sx={{ color: "#4d94ff" }}>
            <CheckCircleIcon
              sx={{ width: "54px", height: "54px" }}
              onClick={handle}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default SetPassword;
