import React from "react";

const Icon = ({ iconURL, label }) => {
  return (
    <div className="flex flex-col items-center">
      <button className="w-[64px] h-[64px] hover:scale-110 transition-transform bg-transparent">
        <img src={iconURL} alt={label} className="w-full h-full" />
      </button>
      <span className="text-white font-mac-bold">{label}</span>
    </div>
  );
};

export default Icon;
