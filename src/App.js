import React from "react";

// components
import NavBar from "./components/NavBar";
import Headshot from "./components/Headshot";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Suewitter from "./components/Suewitter";
import Links from "./components/Links";

// MUI
import {
  withStyles,
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
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(3),
    maxWidth: 1150
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

const LightTooltip = withStyles((theme) => ({
  arrow: {
    color: '#ff7d6f',
  },
  tooltip: {
    // backgroundColor: theme.palette.common.white,
    backgroundColor: '#ff7d6f',
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    // fontSize: 11,
  },
}))(Tooltip);

function App(props) {
  const classes = useStyles();
  const [userType, setUserType] = React.useState("Employer");
  const [tooltipVisible, setTooltipVisible] = React.useState(true);

  function handleUserChange(event) {
    setUserType(event.target.value);
  }

  var greeting, closing, powerSource;
  switch (userType) {
    case "Employer":
      greeting = <code>System.println("Hello</code>;
      // eslint-disable-next-line
      closing = <code>!👋")</code>;
      powerSource = "employment";
      break;
    case "FBI":
      greeting = "Salutations, ";
      // eslint-disable-next-line
      closing = ".😳";
      powerSource = "FBI-ing";
      break;
    default:
      greeting = "What's up, ";
      // eslint-disable-next-line
      closing = "!🤙";
      powerSource = "friendship";
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <NavBar userType={userType} />
        <div>
          <Paper square={true} style={{ minHeight: "100vh" }}>
            <Container fixed className={classes.container}>
              <Grid
                container
                spacing={3}
                direction="row"
                alignContent="center"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={12} id="greeting">
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
                        <LightTooltip
                        // onClose={handleTooltipClose}
                        open={tooltipVisible}
                        // disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Try me!"
                        arrow
                        >
                        <Select
                          labelId="user-type"
                          id="user-type-select"
                          value={userType}
                          onChange={handleUserChange}
                          onFocus={() => setTooltipVisible(false)}
                          // className={classes.select}
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
                        </LightTooltip>
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
                <Headshot userType={userType} height={250} desktop />
                <Headshot userType={userType} height={300} mobile />
                <About userType={userType} />
                <Projects userType={userType} />
                <Headshot userType={userType} desktop mobile />
                <Headshot userType={userType} height={300} desktop />
                <Interests userType={userType} />
                <Suewitter userType={userType} />
                <Links userType={userType} />
                <Contacts userType={userType} />
              </Grid>
            </Container>
          </Paper>
        </div>
        <ThemeProvider theme={bottomTheme}>
          <Paper square={true} className={classes.bottom}>
            <Typography variant="body1" align="center">
              {/* eslint-disable-next-line */}
              🔧 Built with ReactJs, Material-UI.
              <br />
              {/* eslint-disable-next-line */}
              Powered by your {powerSource}. 💖
            </Typography>
          </Paper>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
