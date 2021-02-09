import React from "react";

// MUI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

// assets
import headshotImage from "../assets/headshot.jpeg";

// packages
import DayJs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

function Sueweet(props) {
  DayJs.extend(RelativeTime);

  //   const classes = useStyles();

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sue Lee Headshot" src={headshotImage} />
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
