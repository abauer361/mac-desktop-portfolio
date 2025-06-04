import React from "react";
import allicloud from "../../../images/misc/allicloud.svg";
import done from "../../../images/misc/done.svg";

const WhyICode = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="bg-white w-full h-2 fixed"></div>
      <div className="fixed left-[174px] right-[100px] flex flex-row bg-white w-[calc(78%)] h-10 mt-2">
        <img src={allicloud} className="mr-auto" />
        <img src={done} />
      </div>
      <section className="text-2xl ml-4 mt-12">
        I want MONEY. All I want is MONEY
      </section>
      <section className="text-md mt-2 ml-5">
        I don't get the way you guys think. I want MONEY. 6 figures right out of
        college. 200k a year entry level. I'm in this for MONEY. I don't care
        about whether I'm "fulfilled" I want MONEY. Whatever gets me the most
        MONEY. What do I need on my resume to get the most MONEY. What
        technology gets me PAID THE BEST. All I care about in this major is
        MONEY. That's why I'm in college, I don't wanna laugh and play with
        y'all. I don't wanna be buddy buddy with y'all. I'm here for MONEY.
      </section>
    </div>
  );
};

export default WhyICode;
