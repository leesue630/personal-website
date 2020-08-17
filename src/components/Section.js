import React from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginBottom: theme.spacing(1),
  },
  root: {
    minHeight: 200,
    padding: theme.spacing(2),
  },
}));

function Section(props) {
  const classes = useStyles();
  return (
    <Grid item xs={8}>
      <Paper className={classes.root}>
        <Typography variant="h4" className={classes.title} align="center">
          {props.header}
        </Typography>
        {props.children}
      </Paper>
    </Grid>
  );
}

export default Section;
