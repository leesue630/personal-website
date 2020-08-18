import React from "react";
import { SocialIcon } from "react-social-icons";

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
    minHeight: 200,
    padding: theme.spacing(2),
  },
  iconsContainer: {
    marginTop: theme.spacing(2),
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
    case "Employer":
      contactLine = "Feel free to reach out any day of the week!";
      break;
    case "Friend":
      contactLine = "Hit my line, buddy! 🤙";
      break;
    case "FBI":
      contactLine = "Please do not contact me. 🥺";
      break;
  }
  return (
    <Grid item xs={12}>
      <Paper className={classes.root} elevation={3}>
        <Typography variant="h4" className={classes.title} align="center">
          Contacts
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

                <IconButton aria-label="linkedin">
                  <SocialIcon url="https://www.github.com/leesue630/" />
                </IconButton>
                <IconButton aria-label="linkedin">
                  <SocialIcon url="mailto:suel2@andrew.cmu.edu" />
                </IconButton>
              </div>
            )}
            {props.userType === "Friend" && (
              <IconButton aria-label="linkedin">
                <SocialIcon url="https://www.instagram.com/sueleel/" />
              </IconButton>
            )}
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default Contacts;
