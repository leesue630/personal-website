import React from "react";

// assets
import headshotImage from "../assets/headshot.jpeg";
import headshotAmericaImage from "../assets/headshotAmerica.jpg";
import headshotFriend from "../assets/headshotFriend.jpg";

// MUI
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

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
    case "Friend":
      image = headshotFriend;
      break;
    case "FBI":
      image = headshotAmericaImage;
      break;
    default:
      image = headshotImage;
  }

  var display = {
    xs: props.mobile ? "block" : "none",
    sm: props.mobile ? "block" : "none",
    md: props.desktop ? "block" : "none",
  };
  return (
    <Grid item component={Box} display={display}>
      <Card display="none">
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
