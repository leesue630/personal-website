import React from "react";
import Section from "./Section";

function Spotify() {
  return (
    <Section header="🎵 Spotify Lounge" id="spotify">
      <iframe src="https://open.spotify.com/embed/playlist/6l7yxL5hqrsja6uDJ0IBCX?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </Section>
  );
}

export default Spotify;
