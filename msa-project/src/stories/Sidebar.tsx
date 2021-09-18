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

// import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";

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
function Sidebar() {
  const classes = useStyles();
  // const [submit, setSubmit] = useState(false);
  // const [login] = useMutation(LOGIN);

  // if (loading) return "Submitting...";
  // if (error) return `Submission error! ${error.message}`;

  // const handleSubmit = (e: any) => {
  // e.preventDefault();
  // const code = localStorage.getItem("code");
  // console.log("handelsubmit", code);
  // login({
  //   variables: {
  //     code: code,
  //   },
  // })
  //   .then((r) => {
  //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  //     if (r.errors) {
  //       console.log(r.errors.join("/n"));
  //       return;
  //     }
  //     if (r) {
  //       console.log(r);
  //       localStorage.setItem("token", r.data.login.jwt);
  //     }
  //   })
  //   .catch((reason) => console.log("bbbbbbbbbbbbbbbbbbbbbbbb", reason));
  // login({
  //   variables: {
  //     code: githubCode,
  //   },
  // });
  // setSubmit(true);
  // localStorage.setItem("token", data);
  // };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className={classes.list}>
      {/* {githubCode} */}
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

        <ListItem>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <Button
            color="inherit"
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
          >
            Login
          </Button>
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;

// &redirect_uri=${REDIRECT_URI}
