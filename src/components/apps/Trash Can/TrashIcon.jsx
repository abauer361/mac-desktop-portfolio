import React from "react";

const TrashIcon = ({ image, name, isSelected, onSelect }) => {
  return (
    <div
      className={`flex flex-col items-center h-[100px] w-[70px] cursor-pointer m-2 rounded ${
        isSelected ? "bg-gray-200" : ""
      }`}
      onClick={onSelect}
    >
      <div className="relative w-[60px] h-[60px]">
        <img src={image} className="w-full h-full" />
      </div>
      <p className="text-xs text-center transition-all w-[60px] break-words">
        {name}
      </p>
    </div>
  );
};

export default TrashIcon;
