import React from "react";
import Section from "./Section";

// assets
import sewingIcon from "../assets/sewingIcon.jpg";
import guitarIcon from "../assets/guitarIcon.png";
import soccerIcon from "../assets/soccerIcon.png";
import headshotImage from "../assets/headshot.jpeg";
import americaIcon from "../assets/americaIcon.png";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
}));

function Interests(props) {
  const classes = useStyles();

  var interests;
  switch (props.userType) {
    case "FBI":
      interests = [
        { text: "American Safety", icon: americaIcon },
        { text: "American Pride", icon: americaIcon },
        { text: "American History", icon: americaIcon },
        { text: "American America", icon: americaIcon },
      ];
      break;
    default:
      interests = [
        { text: "Sewing", icon: sewingIcon },
        { text: "Guitar", icon: guitarIcon },
        { text: "Soccer", icon: soccerIcon },
        { text: "Smiling", icon: headshotImage },
      ];
  }

  function generateListItems(items) {
    return items.map((item) => (
      <ListItem>
        <ListItemAvatar>
          <Avatar src={item.icon} />
        </ListItemAvatar>
        <ListItemText primary={item.text} />
      </ListItem>
    ));
  }

  return (
    <Section header="Interests" id="interests">
      <Typography variant="h6" className={classes.title}>
        My interests include:
      </Typography>
      <List dense={true}>{generateListItems(interests)}</List>
    </Section>
  );
}

export default Interests;
