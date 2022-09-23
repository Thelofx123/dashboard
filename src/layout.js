import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import {PersistentDrawerLeft} from "./component/navbar";

export const Layout = () => {

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <PersistentDrawerLeft open={open} handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose}/>
      <Box sx={{ pt: 10, pl: open ? 22 : 2 }}>
        <Outlet />
      </Box>
    </>
  );
};