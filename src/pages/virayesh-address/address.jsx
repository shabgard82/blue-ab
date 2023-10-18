import React from "react";
import styles from "./styles.module.css";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function VirayeshAddress() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/sefaresh");
  const handle = () => navigate("/entekhab-zaman");
  return (
    <Stack className={styles.all}>
      <Stack>
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
            <Typography>Blue Card order</Typography>
            <IconButton color="primary">
              <MuiDrawer />
            </IconButton>
          </Stack>
          <Typography pt={1}>Edit your address if needed</Typography>
          <Stack pt={3}>
            <Typography fontWeight={500}>Province , City</Typography>
            <input className={styles.input} placeholder="tehran,tehran"></input>
          </Stack>
          <Stack pt={3}>
            <Typography fontWeight={500}>District , main street</Typography>
            <input className={styles.input} placeholder="1,tajrish"></input>
          </Stack>
          <Stack pt={3}>
            <Typography fontWeight={500}>Sub street , alley , no</Typography>
            <input className={styles.input} placeholder="mail street,4"></input>
          </Stack>
          <Stack pt={5}>
            <Typography fontWeight={500}>Block , floor , unit</Typography>
            <input className={styles.input} placeholder="4,2,5"></input>
          </Stack>
        </Stack>
      </Stack>
      <Stack pb={3}>
        <Button variant="contained" sx={{ fontWeight: 500 }} onClick={handle}>
          confirm and continue
        </Button>
      </Stack>
    </Stack>
  );
}
export default VirayeshAddress;
