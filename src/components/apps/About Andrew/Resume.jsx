import React from "react";
import resume from "../../../files/andrew_resume.pdf#view=Fit&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0";

const Resume = () => {
  return (
    <div className="w-full h-full border border-red-300">
      <iframe
        src={resume}
        title="Andrew Bauer's Resume"
        className="w-full h-full"
        border="0"
      />
    </div>
  );
};

export default Resume;
