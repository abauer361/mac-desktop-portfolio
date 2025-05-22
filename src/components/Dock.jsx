import React from "react";
import Icon from "./Icon";
import { dockerApps } from "../constants";
import { trashcan, terminal } from "../images/app_icons";

const Dock = () => {
  return (
    <div className="w-full max-w-[1244px] h-[70px] relative p-0">
      <div className="flex w-fit h-[65px] left-1/2 -translate-x-1/2 absolute border shadow-[0px_0px_6px_rgba(0,0,0,0.15)] bg-[rgba(246,246,246,0.36)] p-2 rounded-2xl border-[rgba(26,26,26,0.46)]">
        <div className="flex justify-start items-center gap-0.5 flex-nowrap">
          {dockerApps.map((app) => (
            <div key={app.label}>
              <Icon iconURL={app.photo} />
            </div>
          ))}
          <div className="flex mx-2 align-center h-[55px] w-[1px] bg-[#979797]" />
          <Icon iconURL={terminal} />
          <Icon iconURL={trashcan} />
        </div>
      </div>
    </div>
  );
};

export default Dock;
