//import React, { useState } from "react";
import {
  Divider,
  // Drawer,
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

const CLIENT_ID = "db91b85f047825b818b2";
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

export const Sidebar = () => {
  const classes = useStyles();
  //const [submitForm, setsubmitForm] = useState(false);

  //   const togglesubmitForm = () => {
  //     setsubmitForm(!submitForm);
  //   };
  // export const SideBar: React.FC<HeaderProps> = ({ user }) => {
  //   const classes = useStyles();
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className={classes.list}>
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
      <Divider />
      <List>
        <ListItem button href="/home" component={Link} onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Logout" />
        </ListItem>

        <ListItem
          button
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
          component={Link}
        >
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText className={classes.listText} primary="Login" />
        </ListItem>
      </List>
    </div>
  );
};
