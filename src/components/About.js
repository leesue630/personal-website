import React from "react";
import Section from "./Section";

// MUI
import Typography from "@material-ui/core/Typography";

function About(props) {
  var bio;
  switch (props.userType) {
    case "Employer":
      bio =
        "I am an aspiring software developer who's excited to contribute to the fast-paced, innovative field of computer science. " +
        "I am currently a junior studying Computer Science at Carnegie Mellon University while minoring in Human-Computer Interaction and Media Design. " +
        "I am proficient in C#/Java and HTML/CSS/JavaScript, and can remove duplicates from an array in O(N) time and O(1) space.";
      break;
    case "Friend":
      bio =
        "But you can call me Sue, cuz we're friends. 😎 My favorite candy is the Jolly Rancher Crunch N' Chew. A dream of mine is to learn how to backflip. I don't drink bubble tea.";
      break;
    case "FBI":
      bio =
        'I am just your average, law-abiding citizen. Nothing to see here. I said thank-you to the bus driver after every ride throughout school. I thoroughly enjoy the majestic imagery of "America the Beautiful".';
      break;
  }
  return (
    <Section header="👩 My name is Sue Lee." id="about">
      <Typography variant="body1" align="center">
        {bio}
      </Typography>
    </Section>
  );
}

export default About;
