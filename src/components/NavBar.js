import React from "react";
import logo from "../assets/logo.png";

// MUI
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  navBar: {
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    marginRight: theme.spacing(2),
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.navBar} color="transparent">
        <Toolbar>
          <Avatar alt="Sue Lee Logo" src={logo} className={classes.margin} />
          <Typography variant="h4" className={classes.title}>
            Sue Lee
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Interests</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
