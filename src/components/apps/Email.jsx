import React, { useState } from "react";
import Send from "../../images/misc/send.svg";
import emailjs from "@emailjs/browser";
const USERID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const SERVICEID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATEID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

//Used https://www.emailjs.com/ for email sending

const Email = () => {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [nameError, setNameError] = useState("");
  const [emptyMessageError, setEmptyMessageError] = useState("");

  const sendEmail = () => {
    setButtonText("Loading...");
    emailjs.init(USERID);

    let somethingEmpty = false;

    if (from.trim().length === 0) {
      setNameError("Name must not be empty!");
      somethingEmpty = true;
    }

    if (message.trim().length === 0) {
      setEmptyMessageError("Message must not be empty!");
      somethingEmpty = true;
    }

    if (somethingEmpty) {
      setButtonText("Send");
      return;
    }

    const templateParams = {
      from: from,
      subject: subject,
      message: message,
    };

    emailjs
      .send(SERVICEID, TEMPLATEID, templateParams)
      .then(() => {
        alert("Sent!");
        setButtonText("Send");
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        setButtonText("Send");
      });
  };

  return (
    <div className="w-full h-full p-2">
      <section className="flex gap-1.5">
        <p className="font-mac-bold">From: </p>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder={nameError || "Your Name or Email [either work]"}
          className="focus:outline-none w-full"
        />
      </section>
      <div className="h-px bg-gray-300 my-2" />
      <section className="flex gap-1.5">
        <p className="font-mac-bold">To:</p>
        <p>andrewbauer361@gmail.com</p>
      </section>
      <div className="h-px bg-gray-300 my-2" />
      <section className="flex gap-1.5">
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="focus:outline-none w-full"
        />
      </section>
      <div className="h-px bg-gray-300 my-2" />
      <section className="flex h-[calc(100%-180px)] bg-white">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendEmail();
            }
          }}
          placeholder={
            emptyMessageError || "Yes this actually sends an email to me :))"
          }
          className="focus:outline-none w-full h-full resize-none"
        />
      </section>
      <div className="absolute bottom-3 right-2">
        <button
          className="bg-blue-400 p-2 rounded-lg text-white flex items-center justify-center cursor-pointer"
          onClick={sendEmail}
        >
          <img src={Send} className="w-5 h-5 mr-2" />
          <p className="mr-1">{buttonText}</p>
        </button>
      </div>
    </div>
  );
};

export default Email;
