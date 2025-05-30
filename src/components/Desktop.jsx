import React from "react";
import Icon from "./Icon";
import { spotify } from "../images/app_icons";
import { desktopApps } from "../constants";
import RightClick from "./RightClick";

const Desktop = () => {
  return (
    <div
      className="flex h-[calc(100%-90px)] flex-col justify-start content-start flex-wrap-reverse p-4 w-full gap-4"
      id="desktop-container"
    >
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

      <RightClick />
    </div>
  );
};

export default Desktop;
