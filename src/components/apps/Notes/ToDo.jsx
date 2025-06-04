import React from "react";
import allicloud from "../../../images/misc/allicloud.svg";
import done from "../../../images/misc/done.svg";

const ToDo = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="bg-white w-full h-2 fixed"></div>
      <div className="fixed left-[174px] right-[100px] flex flex-row bg-white w-[calc(78%)] h-10 mt-2">
        <img src={allicloud} className="mr-auto" />
        <img src={done} />
      </div>
      <section className="text-2xl ml-4 mt-12">To Do</section>
      <section className="text-md mt-1 ml-5">
        ○ Rename final_final_v2_FIXTHIS.js
      </section>
      <section className="text-md mt-1 ml-5">○ Build MVP</section>
      <section className="text-md mt-1 ml-5">○ Solve AGI</section>
      <section className="text-md mt-1 ml-5">○ Stop Y2K</section>
      <section className="text-md mt-1 ml-5">
        <span className="underline decoration-red-500 decoration-wavy">
          ○ Fix one bug, introduce two
        </span>
      </section>
      <section className="text-md mt-1 ml-5">
        ○ Google "how to center a div" again
      </section>
      <section className="text-md mt-1 ml-5">○ Push to prod and pray</section>
      <section className="text-md mt-1 ml-5">
        ○ Refactor that function named handleStuff()
      </section>
      <section className="text-md mt-1 ml-5">○ Add another div</section>
      <section className="text-md mt-1 ml-5">
        ○ Add another border border-red around my div
      </section>
    </div>
  );
};

export default ToDo;
