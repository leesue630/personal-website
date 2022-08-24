import React from "react";
import { SocialIcon } from "react-social-icons";

// components
import Headshot from "./Headshot";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginBottom: theme.spacing(1),
  },
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#929292",
    // flex: '1 0 auto',
  },
  iconsContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
  },
  icons: {
    margin: "auto",
  },
}));

function Contacts(props) {
  const classes = useStyles();
  var contactLine;
  switch (props.userType) {
    case "Friend":
      contactLine = "Hit my line, buddy!";
      break;
    case "FBI":
      contactLine = "Please do not contact me. 🥺";
      break;
    default:
      contactLine = "Feel free to reach out any day of the week!";
  }
  return (
    <Grid item xs={12} id="contacts">
      <Paper className={classes.root} elevation={3}>
        {/* eslint-disable-next-line */}
        <Typography variant="h4" className={classes.title} align="center">
          📞 Contact Me
        </Typography>
        <Typography variant="body1" align="center">
          {contactLine}
        </Typography>
        <div className={classes.iconsContainer}>
          <div className={classes.icons}>
            {props.userType === "Employer" && (
              <div>
                <IconButton aria-label="linkedin">
                  <SocialIcon url="http://linkedin.com/in/suel2" />
                </IconButton>

                <IconButton aria-label="github">
                  <SocialIcon url="https://www.github.com/leesue630/" />
                </IconButton>
                {/* <IconButton aria-label="email">
                  <SocialIcon url="mailto:suel2@andrew.cmu.edu" />
                </IconButton> */}
              </div>
            )}
            {props.userType === "Friend" && (
              <div>
                <IconButton aria-label="instagram">
                  <SocialIcon url="https://www.instagram.com/sueleel/" />
                </IconButton>
                <IconButton aria-label="facebook">
                  <SocialIcon url="https://www.facebook.com/sueleel" />
                </IconButton>
              </div>
            )}
          </div>
        </div>
        <Grid container justify="center">

          <Headshot userType={props.userType} height={100} desktop mobile />
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Contacts;
