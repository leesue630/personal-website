import React from "react";

// components
import NavBar from "./components/NavBar";
import Headshot from "./components/Headshot";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Projects from "./components/Projects";
import Interests from "./components/Interests";

// MUI
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div>
          <Paper square={true} style={{ minHeight: "100vh" }}>
            <div className={classes.root}>
              <Typography variant="h2" align="center">
                Hello Future Employer!
              </Typography>
              <Grid
                container
                spacing={2}
                alignContent="center"
                alignItems="center"
                justify="center"
              >
                <Headshot />
                <About />
                <Projects />
                <Headshot />
                <Headshot />
                <Interests />
                <Contacts />
                <Headshot />
              </Grid>
            </div>
          </Paper>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
