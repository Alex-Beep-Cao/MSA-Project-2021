import React, { useState } from "react";
import "./Msa-header.css";

import MenuIcon from "@material-ui/icons/Menu";
//import { AppBar, IconButton, Toolbar } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className="MsaHeader">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleSideBar}
          >
            <MenuIcon />
            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
              <Sidebar />
            </Drawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            YOUR MEMORY WITH YOUR DOG .
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
