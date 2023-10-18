import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { User } from "iconsax-react";
import { Card } from "iconsax-react";
import { ArrowSwapHorizontal } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { Home3 } from "iconsax-react";
import { Menu } from "iconsax-react";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const handle = () => navigate("/profile");
  const handle1 = () => navigate("/home");
  const handle2 = () => navigate("/qrcode-scan");
  const handle3 = () => navigate("/enteghal");
  const handle4 = () => navigate("/qrcode-scan");

  return (
    <BottomNavigation
      sx={{ zIndex: 666, width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction icon={<User size="32" onClick={handle} />} />
      <BottomNavigationAction icon={<Card size="32" onClick={handle4} />} />
      <BottomNavigationAction
        icon={<Menu size="32" fontWeight={600} onClick={handle2} />}
      />
      <BottomNavigationAction
        icon={<ArrowSwapHorizontal size="32" onClick={handle3} />}
      />
      <BottomNavigationAction icon={<Home3 size="32" onClick={handle1} />} />
    </BottomNavigation>
  );
}
