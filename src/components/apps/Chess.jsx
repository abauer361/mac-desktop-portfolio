import React from "react";

// Courtesy of https://play.chessbase.com/en/howto/embedfritz

const Chess = () => {
  return (
    <iframe
      src="https://play.chessbase.com"
      className="w-full h-full border-0"
    ></iframe>
  );
};

export default Chess;
