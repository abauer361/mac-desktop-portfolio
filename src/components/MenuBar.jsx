import { useState, useEffect } from "react";
import {
  appleLogo,
  contact,
  notifications,
  search,
  wifi,
} from "../images/menu_items"; //imports from index.js in the menu_items folder
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

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
    <header className="fixed top-0 left-0 right-0 h-7 font-mac bg-neutral-50 flex  shadow-sm z-50 select-none">
      <div className="flex items-center flex-row">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-6 ml-4">
              <img
                src={appleLogo}
                alt="Apple Logo"
                className="cursor-pointer"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="-translate-x-[10px] translate-y-[1px]"
          >
            <DropdownMenuItem>About Andrew</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sleep</DropdownMenuItem>
            <DropdownMenuItem>Restart</DropdownMenuItem>
            <DropdownMenuItem>Shut Down</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="font-mac-bold cursor-pointer mr-[16px]">
              Portfolio
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>About This Portfolio</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Services</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer mr-[16px]">Edit</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Undo</DropdownMenuItem>
            <DropdownMenuItem>Redo</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cut</DropdownMenuItem>
            <DropdownMenuItem>Copy</DropdownMenuItem>
            <DropdownMenuItem>Paste</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Select All</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer mr-[16px]">View</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Projects</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Skills</DropdownMenuItem>
            <DropdownMenuItem>Experience</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer mr-[16px]">Go</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Back</DropdownMenuItem>
            <DropdownMenuItem>Forward</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Recents</DropdownMenuItem>
            <DropdownMenuItem>Documents</DropdownMenuItem>
            <DropdownMenuItem>Desktop</DropdownMenuItem>
            <DropdownMenuItem>Downloads</DropdownMenuItem>
            <DropdownMenuItem>Don't Go Here</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Recent Folders</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer mr-[16px]">Window</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Minimize</DropdownMenuItem>
            <DropdownMenuItem>Zoom</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Show Previous Tab</DropdownMenuItem>
            <DropdownMenuItem>Show Next Tab</DropdownMenuItem>
            <DropdownMenuItem>Move Tab to New Window</DropdownMenuItem>
            <DropdownMenuItem>Merge All Windows</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Bring All to Front</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer mr-[16px]">Help</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Contact Me</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <img src={wifi} alt="WiFi" />
        <img src={search} alt="Search" />
        <img src={contact} alt="Contact" />
        <img src={notifications} alt="Notifications" />
        <span>{formattedDate}</span>
        <span className="pr-4">{formattedTime}</span>
      </div>
    </header>
  );
};

export default MenuBar;
