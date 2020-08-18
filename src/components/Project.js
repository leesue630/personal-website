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
    maxWidth: 345,
  },
  media: {
    height: 140,
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
    window.location.href = props.github;
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
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary" onClick={handleLearnMore}>
            GitHub
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
