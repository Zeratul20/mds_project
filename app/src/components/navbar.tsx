import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, value: string) => {
    navigate(value);
    setSelectedMenu(value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={selectedMenu}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="home" label="Home" />
        <Tab value="movies" label="Movies" />
      </Tabs>
    </Box>
  );
};
