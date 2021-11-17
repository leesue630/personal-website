import React from "react";
import Section from "./Section";

function Spotify(props) {
  var embedded_object;
  switch (props.userType) {
    case "FBI":
      embedded_object = (<iframe title="fbi_spotify_playlist_iframe" src="https://open.spotify.com/embed/playlist/0tIc0eMdwrHkWuDWGfhUiJ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>);
      break;
    case "Employer":
      embedded_object = (<iframe title="coding_spotify_playlist_iframe" src="https://open.spotify.com/embed/playlist/780GB6XmtN94jp4x2nOAqv?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>);
      break;
    default:
      embedded_object = (<iframe title="earworms_spotify_playlist_iframe" src="https://open.spotify.com/embed/playlist/6l7yxL5hqrsja6uDJ0IBCX?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>);
  }
  return (
    <Section header="🎵 Spotify Lounge" id="spotify">
      {embedded_object}
    </Section>
  );
}

export default Spotify;
