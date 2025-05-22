import React, { useState } from "react";
import Window from "./Window";

const Icon = ({ iconURL, label }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const handleClick = () => {
    setIsWindowOpen(true);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        className="w-[64px] h-[64px] hover:scale-110 transition-transform bg-transparent select-none"
      >
        <img src={iconURL} alt={label} className="w-full h-full" />
      </button>
      <span className="text-white font-mac-bold text-xs select-none">
        {label}
      </span>
      {isWindowOpen && (
        <Window
          isOpen={isWindowOpen}
          title={label}
          onClose={() => setIsWindowOpen(false)}
        />
      )}
    </div>
  );
};

export default Icon;
