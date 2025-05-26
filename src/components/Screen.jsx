import React from "react";
// @ts-ignore
import { Spotify, Email } from "./apps";

const Screen = ({ app }) => {
  switch (app) {
    case "Spotify":
      return <Spotify />;
    case "Contact Me":
      return <Email />;
    default:
      return <div>Cannot find app!</div>;
  }
};

export default Screen;
