import React from "react";
import Section from "./Section";

// MUI
import Typography from "@material-ui/core/Typography";

function About(props) {
  var bio;
  switch (props.userType) {
    case "Friend":
      bio = (
        // eslint-disable-next-line
        <div>
          My name is Sue Lee, but you can call me Sue, cuz we're friends. 😎
          <br />
          My favorite candy is the <b>Jolly Rancher Crunch N' Chew</b>.
          <i>#notspons</i>
          <br />A dream of mine is to learn how to <b>backflip</b>.
          <br />I don't drink bubble tea.
        </div>
      );
      break;
    case "FBI":
      bio = (
        <div>
          I am just your average, law-abiding citizen. Nothing to see here.
          <br />I said thank-you to the bus driver after <u>every ride</u>{" "}
          throughout school.
          <br />I thoroughly enjoy the majestic scenes depicted by{" "}
          <a href="https://www.purpleheart.org/wp-content/uploads/2018/11/AmericaTheBeautiful.pdf">
            "America the Beautiful"
          </a>
          .
          <br />I have not been hit by a meteorite and, thus, <u>do not</u> yet
          qualify for military experimentation.
        </div>
      );
      break;
    default:
      bio = (
        <span>
          I'm an aspiring software developer, excited to contribute to the
          fast-paced field of computer science.
          <br />
          I'm a <u>junior studying CS at Carnegie Mellon University</u>,
          minoring in Human-Computer Interaction and Media Design, expecting to
          graduate in May 2022.
          <br />I am proficient in <u>C#/Java and HTML/CSS/JavaScript</u> (and
          can reverse a linked list in O(N) time and O(1) space.)
        </span>
      );
  }
  return (
    <Section header="Who am I?" id="about">
      <Typography variant="body1" align="center">
        {bio}
      </Typography>
    </Section>
  );
}

export default About;
