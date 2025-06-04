import React, { useEffect, useState, useRef } from "react";
import {
  help,
  ls,
  socials,
  languages,
  accomplishments,
  interests,
} from "./terminalCommands";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      className="bg-black h-full w-full p-2 overflow-y-scroll text-[#4bd12a] font-deja-vu flex flex-col"
      onClick={(e) => inputRef.current.focus()}
    >
      <div className="w-full flex flex-row items-center">
        <p className="mr-2">terminal@andrew-macbook ~ % </p>
        <span
          contentEditable="true"
          spellCheck="false"
          ref={inputRef}
          className="bg-transparent w-fit min-w-[1ch] caret-transparent cursor-default h-6 leading-6 overflow-hidden whitespace-nowrap focus:outline-none"
          onInput={(e) => setInput(e.currentTarget.innerText)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              let newOutput = "";
              switch (input) {
                case "":
                  newOutput = "terminal@andrew-macbook ~ % " + input;
                  break;
                case "help":
                  newOutput =
                    help + "\n" + "terminal@andrew-macbook ~ % " + input;
                  break;
                case "ls":
                  newOutput =
                    ls + "\n" + "terminal@andrew-macbook ~ % " + input;
                  break;
                case "cd socials":
                  newOutput =
                    socials + "\n" + "terminal@andrew-macbook ~ % " + input;
                  break;
                case "cd languages":
                  newOutput =
                    languages + "\n" + "terminal@andrew-macbook ~ % " + input;
                  break;
                case "cd accomplishments":
                  newOutput =
                    accomplishments +
                    "\n" +
                    "terminal@andrew-macbook ~ % " +
                    input;
                  break;
                case "cd interests":
                  newOutput =
                    interests + "\n" + "terminal@andrew-macbook ~ % " + input;
                  break;
                case "socials":
                case "languages":
                case "accomplishments":
                case "interests":
                  newOutput =
                    "Try using cd before trying to access a certain file ie. cd socials" +
                    "\n" +
                    "terminal@andrew-macbook ~ % " +
                    input;
                  break;
                default:
                  newOutput =
                    "Unknown command" +
                    "\n" +
                    "terminal@andrew-macbook ~ % " +
                    input;
                  break;
              }
              setOutput(newOutput + "\n" + output);
              setInput("");
              e.currentTarget.innerText = "";
            }
          }}
        />
        <span className="terminal-cursor"></span>
      </div>
      <div
        className="terminal whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: output }}
      />
      <p>To print available commands, type "help" and press Enter</p>
    </div>
  );
};

export default Terminal;
