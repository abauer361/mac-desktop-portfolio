import React from "react";
import allicloud from "../../../images/misc/allicloud.svg";
import done from "../../../images/misc/done.svg";

const Groceries = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="bg-white w-full h-2 fixed"></div>
      <div className="fixed left-[174px] right-[100px] flex flex-row bg-white w-[calc(78%)] h-10 mt-2">
        <img src={allicloud} className="mr-auto" />
        <img src={done} />
      </div>
      <section className="text-2xl ml-4 mt-12">
        Groceries for Acuka (Recipe)
      </section>
      <section className="text-md mt-2 ml-5">
        • 5 tbsp sweet red pepper paste
      </section>
      <section className="text-md mt-2 ml-5">• 2 tbsp tomato paste</section>
      <section className="text-md mt-1 ml-5">• 1/2 cup olive oil</section>
      <section className="text-md mt-1 ml-5">• 1 cup ground walnuts</section>
      <section className="text-md mt-1 ml-5">• 3 tbsp bread crumbs</section>
      <section className="text-md mt-1 ml-5">• 5 cloves garlic</section>
      <section className="text-md mt-1 ml-5">• 3 tsp red pepper flakes</section>
      <section className="text-md mt-1 ml-5">• 1 tsp thyme</section>
      <section className="text-md mt-1 ml-5">• 1 tsp coriander seed</section>
      <section className="text-md mt-1 ml-5">• 1 tsp peppercorn</section>
    </div>
  );
};

export default Groceries;
