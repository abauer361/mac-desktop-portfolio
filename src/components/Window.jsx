import React, { useState, useRef } from "react";
import close from "../images/window_controls/close.png";
import closeX from "../images/window_controls/closeX.png";

const Window = ({ isOpen, title, onClose }) => {
  const [position, setPosition] = useState({ x: 200, y: 100 });
  const [isDraggingBar, setIsDraggingBar] = useState(false);
  const [dragBarOffset, setDragBarOffset] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizingOffset, setResizingOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 500 });
  const windowRef = useRef(null);
  const [activeSizer, setActiveSizer] = useState(null);

  if (!isOpen) return null;

  //-------------------------------- HANDLE RESIZE FUNCTIONALITY HERE ----------------------------------------------------
  const handleResize = (e) => {
    setIsResizing(true);
    const rect = windowRef.current.getBoundingClientRect();
    const sizerType = e.target.className
      .split(" ")
      .find((className) => className.includes("Sizer"))
      .replace("Sizer", "");
    setActiveSizer(sizerType);
    setResizingOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  React.useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resizeMove);
      window.addEventListener("mouseup", resizeUnclick);
    }
    return () => {
      window.removeEventListener("mousemove", resizeMove);
      window.removeEventListener("mouseup", resizeUnclick);
    };
  }, [isResizing]);

  const resizeMove = (e) => {
    if (isResizing) {
      const MIN_WIDTH = 300;
      const MIN_HEIGHT = 200;
      const MAX_WIDTH = window.innerWidth * 0.95;
      const MAX_HEIGHT = window.innerHeight * 0.8;
      let newY = position.y;
      let newX = position.x;
      let newWidth = windowSize.width;
      let newHeight = windowSize.height;

      if (activeSizer === "left") {
        newWidth = windowSize.width + position.x - e.clientX;
        newX = e.clientX;
      } else if (activeSizer === "right") {
        newWidth = e.clientX - position.x;
      } else if (activeSizer === "top") {
        newHeight = windowSize.height + position.y - e.clientY;
        newY = e.clientY;
      } else if (activeSizer === "bottom") {
        newHeight = e.clientY - position.y;
      } else if (activeSizer === "corner") {
        newWidth = e.clientX - position.x;
        newHeight = e.clientY - position.y;
      }

      //Set window constraints
      if (newWidth < MIN_WIDTH) {
        newWidth = MIN_WIDTH;
        newX = position.x;
      } else if (newWidth > MAX_WIDTH) {
        newWidth = MAX_WIDTH;
        newX = position.x;
      }
      if (newHeight < MIN_HEIGHT) {
        newHeight = MIN_HEIGHT;
        newY = position.y;
      } else if (newHeight > MAX_HEIGHT) {
        newHeight = MAX_HEIGHT;
        newY = position.y;
      }

      //Can't size outside of website
      if (newY < 25) {
        newY = 25;
        newHeight = windowSize.height + (position.y - 25);
      } else if (newY + newHeight > window.innerHeight) {
        // Prevent window from going below the viewport
        newHeight = window.innerHeight - newY;
      }

      if (newX < 0) {
        newX = 0;
        newWidth = windowSize.width + position.x;
      } else if (newX + newWidth > window.innerWidth) {
        // Prevent window from going beyond right edge
        newWidth = window.innerWidth - newX;
      }

      setWindowSize({
        width: newWidth,
        height: newHeight,
      });
      if (newX !== position.x || newY !== position.y) {
        setPosition({ x: newX, y: newY });
      }
    }
  };

  const resizeUnclick = () => {
    setIsResizing(false);
    setActiveSizer(null);
  };

  //-------------------------------- HANDLE BAR FUNCTIONALITY HERE ----------------------------------------------------
  const handleBarClick = (e) => {
    if (
      e.target.className.includes("title-bar") ||
      e.target.className.includes("title-text")
    ) {
      setIsDraggingBar(true);
      const rect = windowRef.current.getBoundingClientRect();
      setDragBarOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleBarMove = (e) => {
    if (isDraggingBar) {
      const newY = e.clientY - dragBarOffset.y;
      const newX = e.clientX - dragBarOffset.x;

      // Constrain Y position between navbar (25px) and window height
      const constrainedY = Math.min(
        Math.max(newY, 25),
        window.innerHeight - windowSize.height
      );

      // Constrain X position between 0 and window width
      const constrainedX = Math.min(
        Math.max(newX, 0),
        window.innerWidth - windowSize.width
      );

      setPosition({
        x: constrainedX,
        y: constrainedY,
      });
    }
  };

  const handleBarUnclick = () => {
    setIsDraggingBar(false);
  };

  React.useEffect(() => {
    if (isDraggingBar) {
      window.addEventListener("mousemove", handleBarMove);
      window.addEventListener("mouseup", handleBarUnclick);
    }
    return () => {
      window.removeEventListener("mousemove", handleBarMove);
      window.removeEventListener("mouseup", handleBarUnclick);
    };
  }, [isDraggingBar]);

  //CLOSE FUNCTIONALITY HERE
  const closeWindow = () => {
    onClose();
  };

  return (
    <div
      ref={windowRef}
      className="fixed bg-white rounded-lg shadow-lg border border-gray-300"
      style={{
        left: position.x,
        top: position.y,
        width: windowSize.width,
        height: windowSize.height,
        cursor: isDraggingBar ? "grabbing" : "default",
      }}
    >
      <section
        className="absolute topSizer w-full cursor-n-resize bg-transparent h-[2px] border-blue-500 border-2"
        onMouseDown={handleResize}
      />
      <div
        className="title-bar bg-gray-200 p-2 rounded-t-lg flex items-center h-9"
        onMouseDown={handleBarClick}
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
      <div className="flex-1 flex flex-col h-full">
        <section
          className="absolute leftSizer border-purple-500 border-2 w-[2px] h-[calc(100%)] -translate-x-1 -translate-y-9 cursor-w-resize"
          onMouseDown={handleResize}
        />
        <div className="p-4 w-full flex screen items-center justify-center h-[calc(100%-40px)] border-red-500 border-2">
          <p className="text-lg">hello world</p>
        </div>
        <section
          className="absolute rightSizer right-0 border-orange-500 border-2 w-[2px] h-[calc(100%-8px)] cursor-e-resize -translate-y-9"
          onMouseDown={handleResize}
        />
        <section
          className="absolute bottomSizer -bottom-1 border-green-500 border-2 h-2.5 w-[calc(100%-10px)] -translate-y-0.5 cursor-s-resize"
          onMouseDown={handleResize}
        />
        <section
          className="absolute cornerSizer -bottom-2.5 right-0 border-yellow-500 border-2 h-[14px] w-[13px] -translate-y-1.5 translate-x-0.5 cursor-nwse-resize"
          onMouseDown={handleResize}
        />
      </div>
    </div>
  );
};

export default Window;
