import React from "react";

//MUI
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  root: {
    minHeight: 200,
    padding: theme.spacing(2, 4),
    backgroundColor: "#d8d8d8",
  },
}));

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function Section(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} id={props.id}>
      <ThemeProvider theme={theme}>
        <Paper className={classes.root}>
          <Typography variant="h4" className={classes.title} align="center">
            {props.header}
          </Typography>
          {props.children}
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default Section;
