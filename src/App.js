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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  select: {
    fontSize: theme.typography.h3.fontSize,
  },
  titleContainer: {
    display: "flex",
  },
  title: {
    margin: "auto",
  },
}));

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  const classes = useStyles();
  const [userType, setUserType] = React.useState("Employer");

  function handleUserChange(event) {
    setUserType(event.target.value);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar userType={userType} />
        <div>
          <Paper square={true} style={{ minHeight: "100vh" }}>
            <div className={classes.root}>
              <Grid
                container
                spacing={2}
                alignContent="center"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={12}>
                  <div className={classes.titleContainer}>
                    <div className={classes.title}>
                      <Typography
                        align="center"
                        variant="h3"
                        display="inline"
                        className={classes.title}
                        gutterBottom={true}
                      >
                        Hello
                      </Typography>
                      {"   "}
                      <Select
                        labelId="user-type"
                        id="user-type-select"
                        value={userType}
                        onChange={handleUserChange}
                        style={{ display: "inline-block" }}
                        className={classes.select}
                      >
                        <MenuItem value={"Employer"}>Employer</MenuItem>
                        <MenuItem value={"Friend"}>Friend</MenuItem>
                        <MenuItem value={"FBI"}>FBI</MenuItem>
                      </Select>{" "}
                      <Typography
                        variant="h3"
                        display="inline"
                        className={classes.title}
                        gutterBottom={true}
                      >
                        !
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Headshot userType={userType} />
                <About userType={userType} />
                <Projects userType={userType} />
                <Headshot userType={userType} />
                <Headshot userType={userType} />
                <Interests userType={userType} />
                <Contacts userType={userType} />
              </Grid>
            </div>
          </Paper>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
