import React, { useState } from "react";
import { createPortal } from "react-dom";
import Window from "./Window";

let globalZIndex = 1002;

const Icon = ({ iconURL, label, externalLink, isLabeled }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [windowZIndex, setWindowZIndex] = useState(1002);

  const getNextZIndex = () => {
    globalZIndex += 1;
    return globalZIndex;
  };

  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, "_blank");
    } else {
      const newZIndex = getNextZIndex();
      setWindowZIndex(newZIndex);
      setIsWindowOpen(true);
    }
  };

  const handleWindowFocus = () => {
    const newZIndex = getNextZIndex();
    setWindowZIndex(newZIndex);
  };

  const renderWindow = () => {
    if (isWindowOpen && !externalLink) {
      return createPortal(
        <Window
          isOpen={isWindowOpen}
          title={label}
          onClose={() => {
            setIsWindowOpen(false);
          }}
          zInd={windowZIndex}
          onFocus={handleWindowFocus}
        />,
        document.body
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center select-none">
      <button
        onClick={handleClick}
        className="w-[64px] h-[64px] hover:scale-110 transition-transform bg-transparent"
      >
        <img
          src={iconURL}
          alt={label}
          className="w-full h-full"
          draggable="false"
        />
      </button>
      <div className="flex items-center gap-1">
        {isLabeled && (
          <span className="text-white font-mac-bold text-xs drag">{label}</span>
        )}
        {externalLink && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </div>
      {renderWindow()}
    </div>
  );
};

export default Icon;
