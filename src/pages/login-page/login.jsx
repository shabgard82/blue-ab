import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import IconButton from "@mui/material/IconButton";
import images from "../../images/blue-bank.jpg";
import { Button } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/forget-information");
  const handleClick1 = () => navigate("/home");
  return (
    <Stack className={styles.all}>
      <Stack display="flex" direction="row" justifyContent="flex-end">
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>

      <Stack
        className={styles.img}
        display="flex"
        flex-direction="row"
        justify-content="center"
      >
        <img src={images}></img>
      </Stack>

      <Stack className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder="username"
          type="text"
        ></input>
        <Divider className={styles.divider} />
        <input
          className={styles.input}
          placeholder="password"
          type="password"
        ></input>
      </Stack>
      <Stack pt={3}>
        <Button
          variant="contained"
          onClick={handleClick1}
          sx={{ fontWeight: 500 }}
        >
          Login with password
        </Button>
      </Stack>
      <Stack pt={1}>
        <Button
          variant="primary"
          onClick={handleClick}
          sx={{ color: "#4d94ff", fontSize: "15px", fontWeight: 550 }}
        >
          I need help
        </Button>
      </Stack>
      <Stack display="flex" direction="row" justifyContent="center" pt={20}>
        <Typography sx={{ color: "gray" }}>Neo Bank Saman</Typography>
      </Stack>
    </Stack>
  );
}
export default Login;
