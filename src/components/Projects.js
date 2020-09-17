import React from "react";
import Section from "./Section";
import fruitful from "../assets/fruitful.png";
import concertprep from "../assets/concertprep.png";
import treesite from "../assets/treesite.png";
import scootersignals from "../assets/scootersignals.jpg";
import Project from "./Project";

// MUI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  },
  tile: {
    display: "inline-block",
  },
}));

function Projects() {
  const classes = useStyles();

  const tileData = [
    {
      name: "Fruitful",
      image: fruitful,
      description:
        "🍊 Social media web app for individuals passionate about fruit.",
      website: "http://fruitful-convos.web.app",
      github: "https://github.com/leesue630/fruitful",
    },
    {
      name: "ConcertPrep",
      image: concertprep,
      description:
        "🎵 A lyric memorization tool using YouTube Video Player and CC.",
      website: "http://concertprep.netlify.app",
      github: "https://github.com/leesue630/concertprep",
    },
    {
      name: "Tree-to-SML Converter",
      image: treesite,
      description:
        "🌲 A data type visualization tool to help students testing in SML.",
      website: "https://leesue630.github.io/tree-to-sml-converter/",
      github: "https://github.com/leesue630/tree-to-sml-converter",
    },
    {
      name: "Scooter Turn Signals",
      image: scootersignals,
      description:
        "🛴 Arduino-powered turn signals for my trusty Razor Scooter.",
      website:
        "https://courses.ideate.cmu.edu/60-223/s2020/work/scooter-turn-signals/",
    },
  ];

  return (
    <Section header="👩‍💻 My Projects" id="projects">
      <Typography variant="body1" align="center">
        Check out my projects!
      </Typography>
      <section className={classes.root}>
        {tileData.map((tile) => (
          <div className={classes.tile}>
            <Project
              name={tile.name}
              image={tile.image}
              description={tile.description}
              website={tile.website}
              github={tile.github}
            />
          </div>
        ))}
      </section>
    </Section>
  );
}

export default Projects;
