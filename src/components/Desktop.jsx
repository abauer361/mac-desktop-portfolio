import React from "react";
import Icon from "./Icon";
import { spotify } from "../images/app_icons";
import { desktopApps } from "../constants";

const Desktop = () => {
  return (
    <div className="flex flex-col justify-start flex-wrap-reverse gap-4 m-4">
      {/* This is where we map all our apps */}
      {desktopApps.map((app) => (
        <Icon
          key={app.label}
          iconURL={app.photo}
          label={app.label}
          externalLink={app.externalLink}
        />
      ))}
      {/*<Icon iconURL={spotify} label="Spotify" />*/}
    </div>
  );
};

export default Desktop;
