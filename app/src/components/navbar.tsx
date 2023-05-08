import * as React from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export const Navbar = ({ isLoaded }: any) => {
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = React.useState("home");

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
        {!isLoaded && <Tab value="signup" label="Sign Up" />}
        {isLoaded && <Tab value="logout" label="Logout" />}
        {isLoaded && <Tab value="users" label="Users" />}
      </Tabs>
    </Box>
  );
};
