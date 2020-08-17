import React, { Component } from "react";
import Section from "./Section";
import { SocialIcon } from "react-social-icons";

// MUI
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

class Contacts extends Component {
  render() {
    return (
      <Section header="Contacts">
        <Typography variant="body1">
          Feel free to reach out any day of the week!
        </Typography>
        <IconButton aria-label="linkedin">
          <SocialIcon url="http://linkedin.com/in/suel2" />
        </IconButton>
        <IconButton aria-label="linkedin">
          <SocialIcon url="https://www.instagram.com/sueleel/" />
        </IconButton>
        <IconButton aria-label="linkedin">
          <SocialIcon url="https://www.github.com/leesue630/" />
        </IconButton>
        <IconButton aria-label="linkedin">
          <SocialIcon url="mailto:suel2@andrew.cmu.edu" />
        </IconButton>
      </Section>
    );
  }
}

export default Contacts;
