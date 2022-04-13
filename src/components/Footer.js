import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// MUI
import {
    BottomNavigation,
    BottomNavigationAction,
  } from "@mui/material";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CropFreeIcon from '@mui/icons-material/CropFree';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import InfoIcon from '@mui/icons-material/Info';

function Footer() {

  const navigate = useNavigate();

  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    if(newValue === "locations"){
      navigate("/locations");
    } else if(newValue === "info"){
      navigate("/dashboard");
    } else if(newValue === "scan"){
      navigate("/scanner");
    } else if(newValue === "chat"){
      navigate("/message");
    } else if(newValue === "profile"){
      navigate("/profile");
    } else {
      navigate("/");
    }

    setValue(newValue);
  };

  return (
    <BottomNavigation 
        value={value}
        onChange={handleChange}
    >
        <BottomNavigationAction
            label="Locations"
            value="locations"
            icon={<LocationOnIcon sx={{ color: "#00e676" }} />}
        />
        <BottomNavigationAction
            label="Info"
            value="info"
            icon={<InfoIcon sx={{ color: "#00e676" }} />}
        />
        <BottomNavigationAction
            label="Scan"
            value="scan"
            icon={<CropFreeIcon sx={{ color: "#00e676" }} />}
        />
        <BottomNavigationAction 
            label="Chat" 
            value="chat" 
            icon={<ChatBubbleIcon sx={{ color: "#00e676" }} />} 
        />
        <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<AccountCircleIcon sx={{ color: "#00e676" }} />}
        />
    </BottomNavigation>
  );
}

export default Footer;