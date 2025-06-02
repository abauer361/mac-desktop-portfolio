import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Chess from "../Chess";

const Andrew = () => {
  const [pageComponent, setPageComponent] = useState(<Chess />);

  return (
    <>
      <div className="flex flex-col">
        <div className="fixed bg-white border border-gray-300 py-2 z-50 select-none left-0 top-0 bottom-1">
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<AboutMe />);
            }}
          >
            About Me
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Education
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Skills
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Accomplishments
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Resume
          </div>
        </div>
        <div className="fixed h-[calc(99.3%)] w-[calc(77.3%)] top-0 right-0 border border-red-500">
          {pageComponent}
        </div>
      </div>
    </>
  );
};

export default Andrew;
