import React from "react";
import headshot from "../../../images/misc/headshot.png";

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={headshot} className="h-[180px] w-[180px]" />
        <h1 className="text-xl">Hey All! I'm Andrew</h1>
        <h2 className="text-md">Though my friends just call me Bauer</h2>
        <h3 className="text-xs">(There's a lot of Andrew's out there)</h3>
        <h3 className=""> </h3>

        <h3 className="text-sm">
          I'm an engineer that loves to build things, including this website!
        </h3>
        <h3 className="text-sm">
          When I'm not working on software projects, I like to do photography
          📸, ski ⛷️, surf 🏄🏻‍♂️, backpack 🏕, play chess ♟️, trave 🛫, hike 🥾,
          play piano 🎹, or rock climb 🧗🏻‍♂️.
        </h3>
        <h3 className="text-sm">
          I really enjoy working with people who like to work hard and play
          hard.
        </h3>
      </div>
    </>
  );
};

export default AboutMe;
