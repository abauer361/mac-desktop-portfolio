import React, { useState, useRef } from "react";
import close from "../images/window_controls/close.png";
import closeX from "../images/window_controls/closeX.png";

const Window = ({ isOpen, title, onClose }) => {
  const [position, setPosition] = useState({ x: 200, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 500 });
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
      const newY = e.clientY - dragOffset.y;
      // Only allow dragging if the new Y position is at or below the navbar (25px)
      if (newY >= 25) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: newY,
        });
      }
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
        width: windowSize.width,
        height: windowSize.height,
        cursor: isDragging ? "grabbing" : "default",
      }}
    >
      <section className="absolute topSizer w-full cursor-n-resize bg-transparent h-[2px] border-blue-500 border-2" />
      <div
        className="title-bar bg-gray-200 p-2 rounded-t-lg flex items-center h-9"
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
      <section className="absolute leftSizer border-purple-500 border-2 w-[2px] h-[calc(100%)] -translate-x-1 -translate-y-9 cursor-w-resize" />
      <div className="p-4 flex screen items-center justify-center h-[calc(100%-40px)] border-red-500 border-2">
        <p className="text-lg">hello world</p>
      </div>
      <section className="absolute rightSizer right-0 border-orange-500 border-2 w-[2px] h-[calc(100%)] cursor-w-resize" />
      <div className="flex relative">
        <section className="absolute bottomSizer border-green-500 border-2 h-2.5 w-[calc(100%-10px)] -translate-y-0.5 cursor-s-resize" />
        <section className="absolute cornerSizer right-0 border-yellow-500 border-2 h-[14px] w-[13px] -translate-y-1.5 translate-x-0.5 cursor-nwse-resize" />
      </div>
    </div>
  );
};

export default Window;
