import React from "react";
import poker_hehe from "../../images/poker_hehe.jpg";

const Poker = () => {
  return (
    <>
      <img src={poker_hehe} className="w-full h-full select-none" />
      <iframe
        src="https://html5.gamedistribution.com/80cf8e94d5af458e822afc6c9f5766e0/?gd_sdk_referrer_url=https://www.example.com/games/poker-with-friends"
        className="w-full h-full border-0"
        scrolling="none"
        frameBorder="0"
      ></iframe>
    </>
  );
};

export default Poker;
