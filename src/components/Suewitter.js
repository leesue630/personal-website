import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// components
import Section from "./Section";
import Sueweet from "./Sueweet";
import SendSueweet from "./SendSueweet";

// MUI
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";

// packages
import axios from "axios";

const googleSheetsApiUrl =
  "https://sheet.best/api/sheets/c8c77182-7a89-4bc9-953c-df80614279c2";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: "36ch",
    // backgroundColor: theme.palette.background.paper,
  },
}));

function Suewitter(props) {
  const [sueweets, setSueweets] = React.useState([]);
  const [displayCount, setDisplayCount] = React.useState(3);

  function getSueweets() {
    axios
      .get(googleSheetsApiUrl)
      .then((res) => {
        // console.log(res);
        setSueweets(
          res.data.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          )
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleLoadMore(e) {
    e.preventDefault();
    setDisplayCount(Math.min(displayCount + 3, sueweets.length));
  }

  function handleSeeLess(e) {
    e.preventDefault();
    setDisplayCount(3);
  }

  function postSueweet(newSueweet) {
    return new Promise((resolve, reject) => {
      axios
        .post(googleSheetsApiUrl, {
          text: newSueweet,
          created_at: new Date().toString(),
        })
        .then((res) => {
          console.log(res);
          getSueweets();
          resolve(true);
        })
        .catch((err) => {
          console.error(err);
          throw err;
        });
    });
  }

  React.useEffect(getSueweets, []);

  const classes = useStyles();

  var displayCountControl;

  if (sueweets.length > displayCount) {
    displayCountControl = (
      <ListItem alignItems="flex-start">
        <Typography component="span" variant="body2" color="textPrimary">
          <Link href="#" onClick={handleLoadMore}>
            Load more...
          </Link>
        </Typography>
      </ListItem>
    );
  } else if (displayCount > 3) {
    displayCountControl = (
      <ListItem alignItems="flex-start">
        <Typography component="span" variant="body2" color="textPrimary">
          <Link href="#" onClick={handleSeeLess}>
            See less...
          </Link>
        </Typography>
      </ListItem>
    );
  } else {
    displayCountControl = "";
  }

  return (
    <Section header="🐥 Suewitter" id="suewitter">
      <List className={classes.root}>
        {sueweets.slice(0, displayCount).map((sueweet, id) => (
          <span key={"sueweetSpan" + id}>
            <Sueweet
              text={sueweet.text}
              created_at={sueweet.created_at}
              userType={props.userType}
              key={"sueweet" + id}
            />
            {id < sueweets.length - 1 && (
              <Divider variant="inset" component="li" key={"divider" + id} />
            )}
          </span>
        ))}
        {displayCountControl}
      </List>
      <SendSueweet postSueweet={postSueweet} userType={props.userType} />
    </Section>
  );
}

export default Suewitter;
