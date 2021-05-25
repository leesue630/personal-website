import React from "react";

// components
import Section from "./Section";
import Project from "./Project";

// assets
import fruitful from "../assets/project_images/fruitful.png";
import pollysOh from "../assets/project_images/pollys-oh.png";
import concertprep from "../assets/project_images/concertprep.png";
import treesite from "../assets/project_images/treesite.png";
import scootersignals from "../assets/project_images/scootersignals.jpg";
import digitaldiary from "../assets/project_images/digitaldiary.png";
import storytime_shadows from "../assets/project_images/storytime_shadows.png";

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
      name: "Storytime Shadows",
      image: storytime_shadows,
      description:
        "🔦 Illustrate classic fables using your very own shadow puppet characters!",
      website: "https://oliviacannoli.itch.io/storytimeshadows",
    },
    {
      name: "Polly's OH",
      image: pollysOh,
      description:
        "🦜 A parody of cmu.ohqueue inspired by the Rubber Duck Debugging method.",
      website: "https://pollys-ohqueue.netlify.app",
      github: "https://github.com/leesue630/pollys-oh",
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
      name: "My Momentary Digital Diary",
      image: digitaldiary,
      description:
        "✨ A relaxing, spiritual p5.js exploration that encourages carefree expression.",
      website: "https://leesue630.github.io/digitaldiary/",
      github: "https://github.com/leesue630/digitaldiary",
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
        Check out my projects! (<i>Swipe to see all</i> 👉)
      </Typography>
      <section className={classes.root}>
        {tileData.map((tile) => (
          <div className={classes.tile} key={tile.name}>
            <Project
              name={tile.name}
              key={tile.name}
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
