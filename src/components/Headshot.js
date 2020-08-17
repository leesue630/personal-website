import React from "react";

// assets
import headshotImage from "../assets/headshot.jpeg";

// MUI
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
}));

export default function Headshot() {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Headshot"
          image={headshotImage}
          title="Headshot"
        />
      </Card>
    </Grid>
  );
}
