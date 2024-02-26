"use client";
import React, { useState } from "react";

const ImageGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [imageUrl, setImageUrl] = useState("/cat.avif");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGenerateImage = async () => {
    try {
      const res = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: process.env.OPENAI_API_KEY,
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputValue}`,
          n: 1,
          size: "512x512",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await res.json();
      const generatedImageUrl = data.data[0].url;
      setImageUrl(generatedImageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={imageUrl} alt="Generated Image" className="max-w-md my-4" />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text for image generation..."
        className="border border-gray-400 rounded px-4 py-2 my-4 text-black"
      />
      <button
        onClick={handleGenerateImage}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate Image
      </button>
    </div>
  );
};

export default ImageGenerator;
