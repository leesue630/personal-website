import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    // minHeight: 320,
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default function Project(props) {
  const classes = useStyles();

  function handleClick() {
    window.location.href = props.website;
  }

  function handleLearnMore() {
    window.location.href = !!props.github ? props.github : props.website;
  }

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root} elevation={3}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom color="textSecondary" variant="subtitle2" component="p">
              {props.time}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
              {"  "}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {!!props.github ? (
            <Button size="small" color="secondary" onClick={handleLearnMore}>
              GitHub
            </Button>
          ) : (
            <Button size="small" color="secondary" onClick={handleLearnMore}>
              Website
            </Button>
          )}
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
