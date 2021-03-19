import React from "react";
import Section from "./Section";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
}));

function Links(props) {
  const classes = useStyles();

  const links = [
    { text: "Is it christmas?", src: "https://isitchristmas.com/" },
    {
      text: "If we were allowed to visit",
      src: "https://ianmaclarty.itch.io/if-we-were-allowed-to-visit",
    },
    { text: "Oikospiel Book 1", src: "http://www.oikospiel.com/" },
    { text: "It is as if you were doing work", src: "https://pippinbarr.github.io/itisasifyouweredoingwork/" },
    { text: "Pink Trombone", src: "https://dood.al/pinktrombone/" },
    { text: "You Are Jeff Bezos", src: "https://direkris.itch.io/you-are-jeff-bezos" },
    { text: "WINDOWS93", src: "https://www.windows93.net/" },
    { text: "Snowflake Generator", src: "https://viviariums.com/projects/snowflake/interactive/" },
  ];

  const colors = [
      "#EC6173", "#F1AE4A", "#E1DD6E", "#51A350", "#6964FF",  "#BD63BE"
  ]

  function generateLinkList(items) {
    return items.map((item, idx) => (
      <Grid item>
        <Chip
          label={item.text}
          onClick={() => window.open(item.src, "_blank")}
          color='primary'

          style={{color:"black", backgroundColor:colors[idx % colors.length]}}
        ></Chip>
      </Grid>
    ));
  }

  return (
    <Section header="🔗 Fun Links" id="links">
      <Grid
        container
        direction="row"
        spacing={2}
        justify="center"
        className={classes.root}
      >
        {generateLinkList(links)}
      </Grid>
    </Section>
  );
}

export default Links;
