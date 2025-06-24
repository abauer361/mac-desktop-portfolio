import React, { useState } from "react";
import blandVideo from "../../videos/blanddots_test.mp4";

const API_KEY = import.meta.env.VITE_BLAND_API_KEY;

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, "");

    // Format the number as we type
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(
        6,
        10
      )}`;
    }
  };

  const handleChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  const handleCall = () => {
    // Remove dashes for the actual call
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    if (cleanNumber.length === 10) {
      callNumber(phoneNumber);
      console.log(`Calling ${phoneNumber}`);
      // Example: window.location.href = `tel:${cleanNumber}`;
    } else {
      alert("Make sure you enter a correct phone number");
    }
  };

  const callNumber = (phoneNumber) => {
    console.log(phoneNumber);
    const options = {
      method: "POST",
      headers: {
        authorization: API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pathway_id: "6833b62e-b9ee-4a15-b7af-349e83fd848a",
        phone_number: phoneNumber,
      }),
    };

    fetch("https://api.bland.ai/v1/calls", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCall();
    }
  };

  return (
    <div className="flex flex-col h-full w-full justify-center bg-[#fffdf5] select-none">
      <h1 className="text-center text-2xl text-[#151515] mt-[4rem]">
        Want a Guided Tour?
      </h1>
      <h1 className="text-center text-xl text-[#151515]">
        Enter your phone number and wait for a call:
      </h1>
      <div className="flex items-center justify-center">
        <input
          type="tel"
          value={phoneNumber}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="focus:outline-none border border-[#151515] m-5 p-3 bg-[#fffdf5] select-none"
          placeholder="650-555-1234"
          maxLength="12" // 3-3-4 format plus dashes
        />
        <button
          onClick={handleCall}
          className="bg-[#ca071a] hover:bg-[#aa071a] text-white font-bold py-2 px-4 rounded"
        >
          Call
        </button>
      </div>
      <div className="relative h-[500px] w-[109%] overflow-hidden mt-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover m-auto"
        >
          <source src={blandVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default PhoneInput;
