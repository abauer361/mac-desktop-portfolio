import React from "react";
import { photos } from "../../images/photos_app_photos";
import PhotoBox from "./Photo Viewer/PhotoBox";

// Resized using
// https://www.iloveimg.com/resize-image
// Resized width to 800 px for all

const Photos = () => {
  return (
    <div className="flex w-full h-full p-4 overflow-y-auto">
      <div className="flex flex-row w-full h-full gap-4 items-start flex-wrap">
        {photos.map((photo, index) => (
          <PhotoBox image={photo} key={`photo${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
