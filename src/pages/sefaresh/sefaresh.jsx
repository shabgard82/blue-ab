import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function Sefaresh() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/animation");
  const handle = () => navigate("/virayesh-address");
  return (
    <Stack className={styles.all}>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton sx={{ color: "#4d94ff" }}>
          <ArrowBackIcon onClick={handleBack} />
        </IconButton>
        <Typography>Blue Card order</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Typography>
        Enter your postal code and landline phone number to receive a blue card
      </Typography>
      <Stack pt={2}>
        <Typography fontWeight={600}>postal code</Typography>
        <input className={styles.input} placeholder="like:212967890"></input>
      </Stack>
      <Stack pt={2}>
        <Typography fontWeight={600}>fixed telephone</Typography>
        <input
          className={styles.input}
          placeholder="like:98 939 537 7024"
        ></input>
      </Stack>
      <Stack pt={7}>
        <Button variant="contained" sx={{ fontWeight: 500 }} onClick={handle}>
          confirm and continue
        </Button>
      </Stack>
    </Stack>
  );
}
export default Sefaresh;
