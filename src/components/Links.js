import React from "react";
import Section from "./Section";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Links(props) {
  const classes = useStyles();

  var links;
  switch (props.userType) {
    case "FBI":
      links = [
        { text: "Google", src: "http://www.google.com" },
        { text: "Google", src: "http://www.google.com" },
        { text: "Google", src: "http://www.google.com" },
      ];
      break;
    case "Employer":
      links = [
        { text: "Google", src: "http://www.google.com" },
      ];
      break;
    default:
      links = [
        { text: "Google", src: "http://www.google.com" },
      ];
  }

  function generateLinkList(items) {
    return items.map((item, idx) => (
        <span>
            <a href={item.src} key={`link${idx}`}>{item.text}</a>
{" "}
        </span>
    ));
  }

  return (
    <Section header="🔗 Fun Links" id="links">
        {generateLinkList(links)}
    </Section>
  );
}

export default Links;
