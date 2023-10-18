import React, { useState } from "react";
import { Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import boxx from "../../images/boxx.jpg";
import mojodihesab from "../../images/mojodihesab.jpg";
import mojodiekol from "../../images/mojodiekol.jpg";
import ghabelbardasht from "../../images/ghabelbardasht.jpg";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import plus from '../../images/plus.jpg';

function CardDrawer() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const { cardItems } = useSelector((state) => state.cardSlice);

  return (
    <>
      <IconButton onClick={() => setisDrawerOpen(true)}>
        <ExpandMoreIcon fontSize="30" sx={{ color: "blue" }} />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Stack overflow-y="scroll" height='400px' pb={2}>
          <Stack pt={2}>
            <Typography sx={{ textAlign: "center", fontWeight: "600" }}>
              choose a bank card
            </Typography>
            <Typography sx={{ color: "gray", textAlign: "center" }}>
              You recently used the following bank cards
            </Typography>
          </Stack>
          <Stack pl={2} pt={2} display='flex' direction='row' alignItems='center'>
            <img src={plus}  width='50px' height='50px'/>
            <Typography sx={{color:'#4269f5'}} pl={2}>New bank card</Typography>
          </Stack>
          <Stack pl={1.5} pr={1.5}>
            
            {cardItems.map((item) => (
              <h3
                style={{
                  backgroundColor: "#dedfe0",
                  border: "2px solid gray",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                {item}
              </h3>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
export default CardDrawer;
