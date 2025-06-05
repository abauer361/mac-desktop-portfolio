import React from "react";

const PhotoBox = ({ image }) => {
  return (
    <div className="flex">
      <div className="flex rounded-md hover:scale-110 transition-transform">
        <img
          src={image}
          alt="Photo"
          className="w-[221px] h-[221px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default PhotoBox;
