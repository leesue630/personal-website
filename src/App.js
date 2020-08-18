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
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(3),
  },
  select: {
    fontSize: theme.typography.h6.fontSize,
  },
  titleContainer: {
    display: "flex",
    padding: theme.spacing(3),
  },
  title: {
    margin: "auto",
  },
  bottom: {
    padding: theme.spacing(4),
    background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
  },
}));

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const bottomTheme = createMuiTheme({
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

  var greeting, closing, powerSource;
  switch (userType) {
    case "Employer":
      greeting = <code>System.println("Hello</code>;
      closing = <code>!👋")</code>;
      powerSource = "employment";
      break;
    case "FBI":
      greeting = "Salutations, ";
      closing = ".😳";
      powerSource = "FBI-ing";
      break;
    default:
      greeting = "What's up, ";
      closing = "!✌";
      powerSource = "friendship";
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <NavBar userType={userType} />
        <div>
          <Paper square={true} style={{ minHeight: "100vh" }}>
            <div className={classes.container}>
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
                        variant="h5"
                        display="inline"
                        gutterBottom={true}
                      >
                        {greeting}
                      </Typography>
                      {"  "}
                      <FormControl>
                        <Select
                          labelId="user-type"
                          id="user-type-select"
                          value={userType}
                          onChange={handleUserChange}
                          className={classes.select}
                        >
                          <MenuItem value={"Employer"}>
                            <code>Employer</code>
                          </MenuItem>
                          <MenuItem value={"Friend"}>
                            <code>Friend</code>
                          </MenuItem>
                          <MenuItem value={"FBI"}>
                            <code>FBI</code>
                          </MenuItem>
                        </Select>
                      </FormControl>
                      <Typography
                        variant="h5"
                        display="inline"
                        gutterBottom={true}
                      >
                        {closing}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Headshot userType={userType} height={200} />
                <About userType={userType} />
                <Projects userType={userType} />
                <Headshot userType={userType} />
                <Headshot userType={userType} height={300} />
                <Interests userType={userType} />
                <Contacts userType={userType} />
              </Grid>
            </div>
          </Paper>
        </div>
        <ThemeProvider theme={bottomTheme}>
          <Paper square={true} className={classes.bottom}>
            <Typography variant="body1" align="center">
              🔧 Built with ReactJs, Material-UI.
              <br />
              Powered by your {powerSource}. 💖
            </Typography>
          </Paper>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
