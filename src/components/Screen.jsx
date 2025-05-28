import React from "react";
// @ts-ignore
import { Spotify, Email, VSCode, Map } from "./apps";

const Screen = ({ app }) => {
  switch (app) {
    case "Spotify":
      return <Spotify />;
    case "Contact Me":
      return <Email />;
    case "VS Code":
      return <VSCode />;
    case "Map":
      return <Map />;
    default:
      return <div>App has not been created yet!</div>;
  }
};

export default Screen;
