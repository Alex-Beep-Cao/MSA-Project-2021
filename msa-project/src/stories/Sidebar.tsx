import {
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import { useEffect, useState } from "react";

// import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";

const CLIENT_ID = "db91b85f047825b818b2";
//const REDIRECT_URI = "https://msa2021f.azurewebsites.net/home";
const REDIRECT_URI = "http://localhost:3000/home";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listText: {
    color: "black",
  },
  fullList: {
    width: "auto",
  },
});
function Sidebar() {
  const classes = useStyles();

  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  // useEffect(() => {
  //   if (localStorage.getItem("token") === "") {
  //     setStatus(!status);
  //     handleLogout();
  //   }
  // }, [status]);

  return (
    <div className={classes.list}>
      {localStorage.getItem("token") ? (
        <List>
          <ListItem button href="/home" component={Link}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Home" />
          </ListItem>
          <ListItem button href="/submit" component={Link}>
            <ListItemIcon>
              <ArrowUpwardIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Submit" />
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem disabled button href="/home" component={Link}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Home" />
          </ListItem>
          <ListItem disabled button href="/submit" component={Link}>
            <ListItemIcon>
              <ArrowUpwardIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Submit" />
          </ListItem>
        </List>
      )}

      <Divider />

      <List>
        <ListItem>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <Button
            color="inherit"
            className={classes.listText}
            onClick={handleLogout}
            href="/bye"
          >
            Logout
          </Button>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <Button
            color="inherit"
            className={classes.listText}
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
          >
            Login in With Github
          </Button>
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;

// &redirect_uri=${REDIRECT_URI}
