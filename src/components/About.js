import React from "react";
import Section from "./Section";

// MUI
import Typography from "@material-ui/core/Typography";

function About(props) {
  var bio;
  switch (props.userType) {
    case "Friend":
      bio =
        "But you can call me Sue, cuz we're friends. 😎 My favorite candy is the Jolly Rancher Crunch N' Chew. A dream of mine is to learn how to backflip. I don't drink bubble tea.";
      break;
    case "FBI":
      bio =
        'I am just your average, law-abiding citizen. Nothing to see here. I said thank-you to the bus driver after every ride throughout school. I thoroughly enjoy the majestic scenes depicted by "America the Beautiful".';
      break;
    default:
      bio = (
        <div>
          I am an <i>aspiring software developer</i> who's excited to contribute
          to the fast-paced field of computer science.
          <br />I am currently a{" "}
          <u>junior studying CS at Carnegie Mellon University</u> while minoring
          in Human-Computer Interaction and Media Design.
          <br />I am proficient in <u>C#/Java and HTML/CSS/JavaScript</u>, and
          can reverse a linked list in O(N) time and O(1) space.{" "}
        </div>
      );
  }
  return (
    <Section header="My name is Sue Lee." id="about">
      <Typography variant="body1" align="center">
        {bio}
      </Typography>
    </Section>
  );
}

export default About;
