import React from "react";
import allicloud from "../../../images/misc/allicloud.svg";
import done from "../../../images/misc/done.svg";

const WebsiteNotes = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="bg-white w-full h-2 fixed"></div>
      <div className="fixed left-[174px] right-[100px] flex flex-row bg-white w-[calc(78%)] h-10 mt-2">
        <img src={allicloud} className="mr-auto" />
        <img src={done} />
      </div>
      <section className="text-2xl ml-4 mt-12">Website Notes</section>
      <section className="text-md mt-2 ml-5">
        ✓⃝ Mail : Email me: Subject, Your Name/Email, Message
      </section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ Maps: Current maps in SF, including places I’ve traveled to
      </section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ Safari: Opens to Google homepage
      </section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ LinkedIn App: hyperlink to my profile
      </section>
      <section className="text-md mt-1 ml-5">
        ○ Photos: Some of my favorite photos
      </section>
      <section className="text-md mt-1 ml-5">
        ○ Bland AI: Call Agent built into app
      </section>
      <section className="text-md mt-1 ml-5">
        ○ Calendar: Updates with the current day
      </section>
      <section className="text-md mt-1 ml-5">
        ○ Contacts: My contact information
      </section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ Notes: Some of my current notes, TO BUILD Section such as stopping
        Y2K, building AGI GEN AI
      </section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ Spotify: iFrame Spotify “Stimulation in the Simulation”
      </section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ Visual Studio Code: iFrame VS Code Current App
      </section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ Terminal: Include cd and ls command about me
      </section>
      <section className="text-md mt-1 ml-5">
        ○ Claude: Get Claude to talk about me
      </section>
      <section className="text-md mt-1 ml-5">✓⃝ Files: About Me</section>
      <section className="text-md mt-1 ml-5">
        ○ Trash: Add some funny stuff
      </section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ GitHub App: Include links to projects
      </section>
      <section className="text-md mt-1 ml-5">✓⃝ Nike app</section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ Add in Chess: https://play.chessbase.com/en/howto/embedfritz
      </section>
      <section className="text-md mt-1 ml-5">
        ✓⃝ Right click function for LinkedIn, GitHub, contact me
      </section>
    </div>
  );
};

export default WebsiteNotes;

/*
✓ Mail : Email me: Subject, Your Name/Email, Message
✓ Maps: Current maps in SF, including places I’ve traveled to
✓ Safari
✓ LinkedIn App - hyperlink to my profile
Photos: Some of my favorite photos
Bland AI: Call Agent
Calendar: Updates with the current day
Contacts: My contact information
Notes: Some of my current notes, including some TO BUILD Section such as stopping Y2K, building AGI GEN AI
✓ Spotify: iFrame Spotify “Stimulation in the Simulation”
✓ Visual Studio Code: iFrame VS Code Current App
✓ Terminal: Include cd and ls command about me
Claude: Get Claude to talk about me
✓ Files: About Me
Trash: Add some funny stuff
✓ GitHub App: Include links to projects
✓ Nike app
✓ Add in Chess: https://play.chessbase.com/en/howto/embedfritz
✓ Right click function to follow on LinkedIn, Star project on GitHub, follow on X, contact me, follow on Github

*/
