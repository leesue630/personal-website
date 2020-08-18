import React from "react";
import Section from "./Section";

// MUI
import Typography from "@material-ui/core/Typography";

function About(props) {
  var bio;
  switch (props.userType) {
    case "Employer":
      bio = "I am an aspiring software developer.";
      break;
    case "Friend":
      bio = "I am a pretty cool, chill gal. 😎";
      break;
    case "FBI":
      bio = "I love America! 🔴⚪🔵";
      break;
  }
  return (
    <Section header="My name is Sue." id="about">
      <Typography variant="body1" align="center">
        {bio}
      </Typography>
    </Section>
  );
}

export default About;
