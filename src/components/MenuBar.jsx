import { useState, useEffect } from "react";
import {
  appleLogo,
  contact,
  notifications,
  search,
  wifi,
} from "../images/menu_items"; //imports from index.js in the menu_items folder

const MenuBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="fixed top-0 left-0 right-0 h-7 font-mac bg-neutral-50 flex px-4 shadow-sm z-50">
      <div className="flex items-center flex-row space-x-4">
        <img src={appleLogo} alt="Apple Logo" />
        <span className="font-mac-bold ">Portfolio</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <img src={wifi} alt="WiFi" />
        <img src={search} alt="Search" />
        <img src={contact} alt="Contact" />
        <img src={notifications} alt="Notifications" />
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </div>
    </header>
  );
};

export default MenuBar;
