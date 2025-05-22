import React, { useState, useRef } from "react";
import close from "../images/window_controls/close.png";
import closeX from "../images/window_controls/closeX.png";

const Window = ({ isOpen, title, onClose }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const windowRef = useRef(null);

  if (!isOpen) return null;

  const handleMouseDown = (e) => {
    if (
      e.target.className.includes("title-bar") ||
      e.target.className.includes("title-text")
    ) {
      setIsDragging(true);
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const closeWindow = () => {
    onClose();
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={windowRef}
      className="fixed bg-white rounded-lg shadow-lg border border-gray-300"
      style={{
        left: position.x,
        top: position.y,
        width: "300px",
        height: "200px",
        cursor: isDragging ? "grabbing" : "default",
      }}
    >
      <div
        className="title-bar bg-gray-200 p-2 rounded-t-lg flex items-center"
        onMouseDown={handleMouseDown}
      >
        <button
          onClick={closeWindow}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-transparent select-none size-3"
        >
          <img src={isHovered ? closeX : close} alt="close" />
        </button>
        <div className="flex-1 flex justify-center title-text">
          <span className="text-sm font-medium select-none title-text">
            {title}
          </span>
        </div>
      </div>
      <div className="p-4 flex items-center justify-center h-[calc(100%-40px)]">
        <p className="text-lg">hello world</p>
      </div>
    </div>
  );
};

/*
    TO DO------------
    Make windows only draggable to menu bar
    Make windows closable
    Be able to resize windows
*/

export default Window;
