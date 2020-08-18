import React from "react";
import Section from "./Section";
import fruitful from "../assets/fruitful.png";
import concertprep from "../assets/concertprep.png";
import Project from "./Project";

// MUI
import Grid from "@material-ui/core/Grid";

function Projects() {
  return (
    <Section header="Projects" id="projects">
      Check out my projects!
      <Grid container spacing={1}>
        <Grid item>
          <Project
            name="Fruitful"
            image={fruitful}
            description="🍊 Social media web app fro individuals passionate about fruit."
            website="http://fruitful-convos.web.app"
            github="https://github.com/leesue630/fruitful"
          />
        </Grid>
        <Grid item>
          <Project
            name="ConcertPrep"
            image={concertprep}
            description="🎵 A lyric memorization tool using YouTube Video Player and CC."
            website="http://concertprep.netlify.app"
            github="https://github.com/leesue630/concertprep"
          />
        </Grid>
      </Grid>
    </Section>
  );
}

export default Projects;
