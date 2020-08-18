import React from "react";

// assets
import headshotImage from "../assets/headshot.jpeg";
import headshotAmericaImage from "../assets/headshotAmerica.png";
import headshotFriend from "../assets/headshotFriend.jpg";

// MUI
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

function useStyles(height) {
  return makeStyles((theme) => ({
    root: {
      maxWidth: 300,
      maxHeight: height ? height : "none",
    },
  }))();
}

export default function Headshot(props) {
  const classes = useStyles(props.height);

  var image;
  switch (props.userType) {
    case "Employer":
      image = headshotImage;
      break;
    case "Friend":
      image = headshotFriend;
      break;
    case "FBI":
      image = headshotAmericaImage;
      break;
  }
  return (
    <Grid item>
      <Card>
        <Grid></Grid>
        <CardMedia
          component="img"
          alt="Headshot"
          image={image}
          title="Headshot"
          className={classes.root}
        />
      </Card>
    </Grid>
  );
}
