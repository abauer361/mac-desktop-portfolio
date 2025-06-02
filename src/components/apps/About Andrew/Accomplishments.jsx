import React from "react";

const Accomplishments = () => {
  return (
    <div className="w-full">
      <p className="mb-6">
        <p className="font-bold text-center text-[25px]">Accomplishments</p>
        <p className="text-center text-xl">࿔━━━━━━━━━━━━࿔</p>
      </p>
      <p className="mb-6">
        <p className="font-bold">Redbull: Can You Make It Challenge</p>
        <p className="text-xs text-gray-400">
          <i>
            <u>North American Winning Team</u>: OC Moment Makers
          </i>
        </p>
        <li className="list-disc max-w-[500px]">
          One of 10 U.S. teams selected from over 300 applicant teams to
          participate in a Europe-wide challenge
        </li>
        <li className="list-disc max-w-[500px]">
          Created social campaigns, outreach efforts, and marketing materials
          that drove engagement and votes
        </li>
        <li className="list-disc max-w-[500px]">
          <a
            href="https://www.redbull.com/int-en/events/red-bull-can-you-make-it"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              <i>Link to project</i>
            </u>
          </a>
        </li>
        <li className="list-disc max-w-[500px]">
          <a
            href="https://www.youtube.com/watch?v=moq1Qy2wTzE"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              <i>Link to video</i>
            </u>
          </a>
        </li>
      </p>
    </div>
  );
};

export default Accomplishments;
