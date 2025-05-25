import React, { useState } from "react";
import Window from "./Window";

const Icon = ({ iconURL, label }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const handleClick = () => {
    console.log("Icon clicked:", label);
    setIsWindowOpen(true);
  };

  const renderWindow = () => {
    console.log("isWindowOpen set to:", isWindowOpen);
    if (isWindowOpen) {
      return (
        <Window
          isOpen={isWindowOpen}
          title={label}
          onClose={() => {
            setIsWindowOpen(false);
          }}
        />
      );
    }
    return null;
  };

  console.log("Current isWindowOpen state:", isWindowOpen);

  return (
    <div className="flex flex-col items-center select-none">
      <button
        onClick={handleClick}
        className="w-[64px] h-[64px] hover:scale-110 transition-transform bg-transparent "
      >
        <img
          src={iconURL}
          alt={label}
          className="w-full h-full"
          draggable="false"
        />
      </button>
      <span className="text-white font-mac-bold text-xs drag">{label}</span>
      {renderWindow()}
    </div>
  );
};

export default Icon;
