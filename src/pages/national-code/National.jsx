import React from "react";
import { Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles.module.css";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";

function NationalCode() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/invite-code");
  const handle=()=>navigate("/date")

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
            <ArrowBackIcon onClick={handleBack}/>
          </IconButton>
          <Typography>Create account</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack pt={2}>
          <Typography>Enter your national code</Typography>
          <input
            className={styles.input}
            placeholder="national code is ten digits"
          ></input>
        </Stack>
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
            sx={{ width: "30px", height: "30px" }}
            onClick={handle}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
}
export default NationalCode;
