"use client";
import React, { useState } from "react";

const RandomPass = () => {
  const [password, setPassword] = useState("");
  const [copyIcon, setCopyIcon] = useState("📋");

  const generatedPassword = () => {
    const charset =
      "abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|;:,.<>?";

    let generatePassword = "";

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatePassword += charset.charAt(randomIndex);
    }

    setPassword(generatePassword);
  };

  const copyToClipBoard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopyIcon("✔️");
    }

    setInterval(() => {
      setCopyIcon("📋");
    }, 2000);
  };

  return (
    <div className=" h-dvh flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-white w-[500px] h-[300px]">
        <div className="mb-4">
          <p className="px-2 py-5 bg-slate-500 text-white text-center w-[300px] rounded">
            {password ? password : " Generated A Password"}
            <span
              onClick={copyToClipBoard}
              className="text-red-500 cursor-pointer ms-2"
            >
              {copyIcon}
            </span>
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={generatedPassword}
            className="bg-blue-500 p-2 px-5 text-white rounded-full"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomPass;
