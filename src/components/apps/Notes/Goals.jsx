import React from "react";
import allicloud from "../../../images/misc/allicloud.svg";
import done from "../../../images/misc/done.svg";

const Goals = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="bg-white w-full h-2 fixed"></div>
      <div className="fixed left-[174px] right-[100px] flex flex-row bg-white w-[calc(78%)] h-10 mt-2">
        <img src={allicloud} className="mr-auto" />
        <img src={done} />
      </div>
      <section className="text-2xl ml-4 mt-12">Goals</section>
      <section className="text-md mt-2 ml-5">
        ✓⃝ 100 day Duolingo streak
      </section>
      <section className="text-md mt-1 ml-5">○ Get big 💪🏻💪🏻</section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ Build a personal website in React
      </section>
      <section className="text-md mt-1 ml-5">
        ○ Do a 360 skiing (torn ACL)
      </section>
      <section className="text-md mt-1 ml-5">○ Run a mile post surgery</section>
    </div>
  );
};

export default Goals;
