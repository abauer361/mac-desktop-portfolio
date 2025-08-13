import React, { useEffect } from "react";

const Nike = () => {
  useEffect(() => {
    alert(
      "This is a web app I made to practice Tailwind CSS - check it out at nike.andrew-bauer.com"
    );
  }, []);

  return (
    <iframe
      src="https://tailwind.andrew-bauer.com/"
      className="w-full h-full"
    />
  );
};

export default Nike;
