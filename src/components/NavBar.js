import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// assets
import logo from "../assets/logo.png";
import americaIcon from "../assets/americaIcon.png";

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

function NavBar(props) {
  const classes = useStyles();

  function scrollToTop() {
    scroll.scrollToTop();
  }

  function scrollToBottom() {
    scroll.scrollToBottom();
  }

  return (
    <div>
      <AppBar position="sticky" className={classes.navBar} color="transparent">
        <Toolbar>
          <Avatar
            alt="Sue Lee Logo"
            src={props.userType === "FBI" ? americaIcon : logo}
            className={classes.margin}
            onClick={scrollToTop}
          />
          <Typography variant="h4" className={classes.title}>
            Sue Lee
          </Typography>
          <Button color="inherit" className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </Button>
          <Button color="inherit" className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </Button>
          <Button color="inherit" className="nav-item">
            <Link
              activeClass="active"
              to="interests"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Interests
            </Link>
          </Button>
          <Button color="inherit" className="nav-item" onClick={scrollToBottom}>
            Contacts
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
