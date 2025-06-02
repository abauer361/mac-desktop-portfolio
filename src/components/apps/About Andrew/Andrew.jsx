import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Accomplishments from "./Accomplishments";
import Resume from "./Resume";

const Andrew = () => {
  const [pageComponent, setPageComponent] = useState(<AboutMe />);

  return (
    <div className="h-full w-full">
      <div className="flex flex-row items-start h-[99.1%]">
        <div className="bg-white border border-gray-300 py-2 z-50 select-none w-[200px] h-full">
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<AboutMe />);
            }}
          >
            About Me
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<Education />);
            }}
          >
            Education
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<Skills />);
            }}
          >
            Skills
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<Accomplishments />);
            }}
          >
            Accomplishments
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<Resume />);
            }}
          >
            Resume
          </div>
        </div>
        <div className="flex h-full w-full px-5 overflow-y-auto">
          {pageComponent}
        </div>
      </div>
    </div>
  );
};

export default Andrew;
