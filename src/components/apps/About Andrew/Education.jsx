import React from "react";

const Education = () => {
  return (
    <div className="w-full">
      <p className="mb-6">
        <p className="font-bold text-center text-[25px]">Education</p>
        <p className="text-center text-xl">࿔━━━━━━━━━━━━࿔</p>
      </p>
      <p className="mb-6">
        <p className="font-bold">Chapman University</p>
        <p className="text-xs text-gray-400">2017-2021</p>
        <p className="">
          <i>Bachelor's:</i> Software Engineering
        </p>
        <li className="list-disc">
          <u>Advisory Panel</u> - Fowler School of Engineering
          <p className="pl-5 text-gray-500 text-xs">
            Selected by Dean Lyons to advise faculty on the strategic direction
            of the new college
          </p>
        </li>
        <li className="list-disc">
          <u>Sole Student Advisor </u> – B.S. Software Engineering Program
          <p className="pl-5 text-gray-500 text-xs">
            Sole advisor appointed by Dr. Stevens to guide students on success
            metrics and academic strategy
          </p>
        </li>
      </p>

      <p className="mb-6">
        <p className="font-bold">Stanford University</p>
        <p className="text-xs text-gray-400">2024-2024</p>
        <li className="list-disc">Javascript Certification</li>
      </p>
    </div>
  );
};

export default Education;
