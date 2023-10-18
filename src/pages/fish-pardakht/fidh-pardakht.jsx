import React from "react";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import { useNavigate } from "react-router-dom";
import pardakhtprof from "../../images/pardakhtprof.jpg";
import { useSelector } from "react-redux";
import ok from "../../images/ok.jpg";
import pardakht from "../../images/pardakht.jpg";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareIcon from "@mui/icons-material/Share";


function FishPardakht() {
  const random_code = Math.floor(10000000 + Math.random() * 90000000);
  const random = Math.floor(10000 + Math.random() * 90000);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const navigate = useNavigate();
  const { Money } = useSelector((state) => state.maliSlice);
  const { cardItems } = useSelector((state) => state.cardSlice);
  const handleBack = () => navigate("/afzayesh");
  return (
    <Stack
      display="flex"
      direction="column"
      justifyContent="space-between"
      height={"100vh"}
    >
      <Stack>
        {" "}
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
          <Typography>Receipt</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack>
          <Stack
            display="flex"
            direction="row"
            justifyContent="center"
            alignItems="center"
            pt={1}
          >
            <img src={pardakhtprof} width="80px" height="60px" />
          </Stack>
          <Typography sx={{ fontWeight: "600", textAlign: "center" }}>
            Erfan Shabgard
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "gray",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            IR-14 0560 6118 2800 5528 6683 01
          </Typography>
          <Stack>
            <Typography
              pt={2}
              sx={{ fontWeight: "600", fontSize: "28px", textAlign: "center" }}
            >
              {Money} $
            </Typography>
            <Typography
              sx={{
                color: "gray",
                fontSize: "12px",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Deposit amount
            </Typography>
            <Stack
              display="flex"
              direction="row"
              justifyContent="center"
              pt={2}
            >
              <img src={ok} width="120px" height="40px" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Divider
          sx={{
            color: "gray",
            backgroundColor: "gray",
            fontWeight: "500",
            paddingTop: "2px",
            border: "none",
            boxShadow: "none",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        />
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          pl={2}
          pr={2}
          pt={2}
          pb={2}
        >
          <Typography sx={{ color: "gray", fontWeight: "600" }}>
            time
          </Typography>
          <Typography sx={{ fontWeight: "600" }}>{`time:${
            hours < 10 ? "0" + hours : hours
          }:${
            minutes < 10 ? "0" + minutes : minutes
          } , Date: ${day}-${month}-${year}`}</Typography>
        </Stack>
        <Divider />
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          pl={2}
          pr={2}
          pt={2}
          pb={2}
        >
          <Typography sx={{ color: "gray", fontWeight: "600" }}>
            Payment by card
          </Typography>
          <Typography sx={{ fontWeight: "600" }}>{cardItems}</Typography>
        </Stack>
        <Divider />
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          pl={2}
          pr={2}
          pt={2}
          pb={2}
        >
          <Typography sx={{ color: "gray", fontWeight: "600" }}>
            {" "}
            Reference No
          </Typography>
          <Typography sx={{ fontWeight: "600" }}>{random_code}</Typography>
        </Stack>
        <Divider />
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          pl={2}
          pr={2}
          pt={2}
          pb={2}
        >
          <Typography sx={{ color: "gray", fontWeight: "600" }}>
            Issue Tracking
          </Typography>
          <Typography sx={{ fontWeight: "600" }}>{random}</Typography>
        </Stack>
      </Stack>
      <Stack display="flex" direction="row" justifyContent="center" pt={2}>
        <img src={pardakht} width="120px" height="60px" alt="b.pay" />
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pr={2}
        pl={2}
        pb={2}
      >
        <Stack
          display="flex"
          direction="column"
          alignItems="center"
          sx={{
            backgroundColor: "#b3e0ff",
            padding: "5px 40px",
            borderRadius: "10px",
          }}
        >
          <IconButton sx={{ color: "blue" }}>
            <SaveAltIcon />
          </IconButton>
          <Typography sx={{ color: "blue", fontWeight: "600" }}>
            save to gallery
          </Typography>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          alignItems="center"
          sx={{
            backgroundColor: "#b3e0ff",
            padding: "5px 70px",
            borderRadius: "10px",
          }}
        >
          <IconButton sx={{ color: "blue" }}>
            <ShareIcon />
          </IconButton>
          <Typography sx={{ color: "blue", fontWeight: "600" }}>
            share
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default FishPardakht;
