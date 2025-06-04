import React, { useState } from "react";
import Goals from "./Goals";
import Groceries from "./Groceries";
import HelloWorld from "./HelloWorld";
import WebsiteNotes from "./WebsiteNotes";
import ToDo from "./ToDo";
import WhyICode from "./WhyICode";

const Notes = () => {
  const [pageComponent, setPageComponent] = useState(<Goals />);

  return (
    <div className="h-full w-full">
      <div className="flex flex-row items-start h-full">
        <div className="bg-white border border-gray-300 py-2 z-50 select-none w-[200px] h-full">
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<Goals />);
            }}
          >
            Goals 2025 💪🏻💪🏻
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<Groceries />);
            }}
          >
            Groceries
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<HelloWorld />);
            }}
          >
            Hello World
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<ToDo />);
            }}
          >
            To Do
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<WhyICode />);
            }}
          >
            Why I Code
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setPageComponent(<WebsiteNotes />);
            }}
          >
            Website Notes
          </div>
        </div>
        <div className="flex h-full w-full px-5 overflow-y-auto">
          {pageComponent}
        </div>
      </div>
    </div>
  );
};

export default Notes;
