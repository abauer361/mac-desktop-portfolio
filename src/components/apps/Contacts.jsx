import React from "react";
import headshot from "../../images/misc/contactPhoto.png";
import contactBar from "../../images/misc/contactBar.svg";
import back from "../../images/misc/iCloudBack.svg";
import mobileBox from "../../images/misc/mobileBox.svg";
import emailBox from "../../images/misc/emailBox.svg";
import homeBox from "../../images/misc/homeBox.svg";

// Help with assets from:
// https://www.figma.com/design/D7IsWWzCxCrqdt5hdnTpto/iOS-Select-Contact--Community-?node-id=1-733&t=KZUxrjMzAJcpVos1-0

const Contacts = () => {
  return (
    <div className="h-full w-full bg-[#f2f2f7] overflow-y-auto select-none">
      <img src={back} className="h-[50px] w-[80px]" />
      <div className="flex flex-col align-middle justify-center">
        <section className="w-full h-[150px] flex justify-center">
          <img src={headshot} className="w-[150px] h-[150px]" />
        </section>

        <p className="text-center font-mac text-2xl my-3">Andrew Bauer</p>

        <section className="w-full flex justify-center">
          <img src={contactBar} className="h-[100px] w-[400px] align-middle" />
        </section>

        <section className="w-full flex justify-center">
          <img src={mobileBox} className="h-[135px] w-[400px] align-middle" />
        </section>

        <section className="w-full flex justify-center">
          <img src={emailBox} className="h-[100px] w-[400px] align-middle" />
        </section>

        <section className="w-full flex justify-center">
          <img src={homeBox} className="h-[138px] w-[400px] align-middle" />
        </section>
      </div>
    </div>
  );
};

export default Contacts;
