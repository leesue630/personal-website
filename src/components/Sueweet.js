import React from "react";

// MUI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

// assets
import headshotImage from "../assets/headshot.jpeg";
import headshotAmericaImage from "../assets/headshotAmerica.jpg";
import headshotFriend from "../assets/headshotFriend.jpg";

// packages
import DayJs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

function Sueweet(props) {
  DayJs.extend(RelativeTime);

  var image;
  switch (props.userType) {
    case "Friend":
      image = headshotFriend;
      break;
    case "FBI":
      image = headshotAmericaImage;
      break;
    default:
      image = headshotImage;
  }

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sue Lee Headshot" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={props.text}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                // className={classes.inline}
                color="textPrimary"
              >
                {DayJs(props.created_at).fromNow()}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </div>
  );
}

export default Sueweet;
