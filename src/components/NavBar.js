import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// assets
import logoEmployer from "../assets/logoEmployer.png";
import logoFriend from "../assets/logo.png";
import logoAmerica from "../assets/americaIcon.png";

// MUI
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  navBar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    padding: theme.spacing(1),
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

  const offset = -85;
  const duration = 400;

  var logo;
  switch (props.userType) {
    case "Employer":
      logo = logoEmployer;
      break;
    case "FBI":
      logo = logoAmerica;
      break;
    default:
      logo = logoFriend;
  }

  return (
    <div>
      <AppBar position="fixed" color="inherit" className={classes.navBar}>
        <Toolbar>
          <Avatar
            alt="Sue Lee Logo"
            src={logo}
            className={classes.margin}
            onClick={scrollToTop}
          />
          <Typography variant="h4" className={classes.title}>
            <code>sue lee</code>
          </Typography>
          <Button color="inherit">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              Projects
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              activeClass="active"
              to="interests"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              Interests
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-100}
              duration={duration}
            >
              Contacts
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.navBar} />
    </div>
  );
}

export default NavBar;
