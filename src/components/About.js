import React from "react";
import Section from "./Section";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
}));

function About(props) {
  const classes = useStyles();

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
          I'm an <b>aspiring software developer</b>👩‍💻, excited to contribute to
          the fast-paced field of computer science.
          <br />
          <br />
          I'm a <b>junior studying CS at Carnegie Mellon</b>🐶, minoring in
          Human-Computer Interaction, and expecting to graduate in May 2022.🎓
          <br />
          <br />I am proficient in <b>C#/Java and HTML/CSS/JavaScript</b> (and
          can reverse a linked list in O(1) space).😉
        </span>
      );
  }
  return (
    <Section header="Who am I?" id="about">
      <Container maxWidth="xs">
        <Typography component="div" align="center" className={classes.root}>
          {bio}
        </Typography>
      </Container>
    </Section>
  );
}

export default About;
