import React from "react";
// @ts-ignore
import {
  Spotify,
  Email,
  VSCode,
  Map,
  Nike,
  Chess,
  Safari,
  Andrew,
  Poker,
  Terminal,
  Notes,
} from "./apps";

const Screen = ({ app }) => {
  switch (app) {
    case "Spotify":
      return <Spotify />;
    case "Contact Me":
      return <Email />;
    case "VS Code":
      return <VSCode />;
    case "Maps":
      return <Map />;
    case "Nike":
      return <Nike />;
    case "Chess":
      return <Chess />;
    case "Safari":
      return <Safari />;
    case "About Andrew":
      return <Andrew />;
    case "Poker":
      return <Poker />;
    case "Terminal":
      return <Terminal />;
    case "Notes":
      return <Notes />;
    default:
      return <div>App has not been created yet!</div>;
  }
};

export default Screen;
