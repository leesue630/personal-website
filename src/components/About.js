import React from "react";
import Section from "./Section";

// MUI
import Typography from "@material-ui/core/Typography";

function About(props) {
  var bio;
  switch (props.userType) {
    case "Friend":
      bio = (
        <div>
          But you can call me Sue, cuz we're friends. 😎
          <br />
          My favorite candy is the Jolly Rancher Crunch N' Chew.
          <br />A dream of mine is to learn how to backflip.
          <br />I don't drink bubble tea.
        </div>
      );
      break;
    case "FBI":
      bio = (
        <div>
          I am just your average, law-abiding citizen. Nothing to see here.
          <br />I said thank-you to the bus driver after every ride throughout
          school.
          <br />I thoroughly enjoy the majestic scenes depicted by{" "}
          <a href="https://www.purpleheart.org/wp-content/uploads/2018/11/AmericaTheBeautiful.pdf">
            "America the Beautiful"
          </a>
          .
        </div>
      );
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
