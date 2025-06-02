import React from "react";

// Courtesty of https://stackoverflow.com/questions/73439791/open-a-search-in-a-iframe

const Safari = () => {
  return (
    <iframe
      src="https://google.com/webhp?igu=1"
      className="w-full h-full border-0"
    ></iframe>
  );
};

export default Safari;
