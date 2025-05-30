import React, { useEffect, useState } from "react";

const RightClick = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const desktopContainer = document.getElementById("desktop-container");

    const handleRightClick = (e) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleClick = () => {
      setIsVisible(false);
    };

    // Add event listeners to the desktop container and document
    if (desktopContainer) {
      desktopContainer.addEventListener("contextmenu", handleRightClick);
    }
    document.addEventListener("click", handleClick);

    // Cleanup
    return () => {
      if (desktopContainer) {
        desktopContainer.removeEventListener("contextmenu", handleRightClick);
      }
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bg-white border border-gray-300 rounded shadow-lg py-2 z-50 select-none"
      style={{ left: position.x, top: position.y }}
      onClick={handleMenuClick}
    >
      <div
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          window.open("https://www.linkedin.com/in/andrew-m-bauer/", "_blank");
        }}
      >
        My LinkedIn
      </div>
      <div
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          window.open(
            "https://github.com/abauer361/mac-desktop-portfolio",
            "_blank"
          );
        }}
      >
        Star This Project!
      </div>
      <div
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => window.open("mailto:andrewbauer361@gmail.com", "_blank")}
      >
        Contact Me
      </div>
    </div>
  );
};

export default RightClick;
