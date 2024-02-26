import React, { useState } from "react";

const GenerateRandomIP = () => {
  const [IPAddress, setIPAddress] = useState("");

  const generatedIP = () => {
    const randomIP = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 256)
    ).join(".");
    setIPAddress(randomIP);
  };

  return (
    <div className="h-dvh flex items-center justify-center flex-col">
      <p>{IPAddress}</p>
      <button onClick={generatedIP} className="p-2 bg-gray-400">
        New IP
      </button>
    </div>
  );
};

export default GenerateRandomIP;
