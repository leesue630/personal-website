import React from "react";
import Section from "./Section";

// assets
import sewingIcon from "../assets/interests_icons/sewingIcon.jpg";
import guitarIcon from "../assets/interests_icons/guitarIcon.png";
import soccerIcon from "../assets/interests_icons/soccerIcon.png";
import headshotImage from "../assets/headshots/headshot.jpeg";
import americaIcon from "../assets/interests_icons/americaIcon.png";
import codeIcon from "../assets/interests_icons/codeIcon.png";

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
    // maxWidth: 752,
  },
}));

function Interests(props) {
  const classes = useStyles();

  var interests;
  switch (props.userType) {
    case "FBI":
      interests = [
        { text: "American Pride", icon: americaIcon },
        { text: "American History", icon: americaIcon },
        { text: "American Flag", icon: americaIcon },
        { text: "American America", icon: americaIcon },
      ];
      break;
    case "Employer":
      interests = [
        { text: "Full-stack Development", icon: codeIcon },
        { text: "Visual/Interactive Results", icon: codeIcon },
        { text: "Creative or Interdisciplinary Tasks", icon: codeIcon },
        { text: "Learning About New Concepts/Tools/Libraries", icon: codeIcon },
      ];
      break;
    default:
      interests = [
        { text: "Crafting: from sewing to crocheting!", icon: sewingIcon },
        {
          text: "Novice Guitar-ing: currently learning your favorite song ;)",
          icon: guitarIcon,
        },
        {
          text: "Group Sports: soccer or any other group exercise is a blast!",
          icon: soccerIcon,
        },
        {
          text:
            'Smiling: "A smile is a curve that sets everything straight." - Phyllis Diller',
          icon: headshotImage,
        },
      ];
  }

  function generateListItems(items) {
    return items.map((item, idx) => (
      <ListItem key={"listItem" + idx}>
        <ListItemAvatar key={"listItemAvatar" + idx}>
          <Avatar src={item.icon}  key={"avatar" + idx}/>
        </ListItemAvatar>
        <ListItemText primary={item.text}  key={"listItemText" + idx}/>
      </ListItem>
    ));
  }

  return (
    <Section header="😃 My Interests" id="interests">
      <Typography variant="h6" className={classes.root}>
        My interests include:
      </Typography>
      <List dense={true}>{generateListItems(interests)}</List>
    </Section>
  );
}

export default Interests;
