import React, { useRef, useState } from "react";
import Heart from "react-animated-heart";

const TestPage = () => {
  const ButtonRef = useRef(null);
  const [text, setText] = useState("Do you love me ?");
  const [isClick, setClick] = useState(false);

  const handleRandomPosition = () => {
    const button = ButtonRef.current;
    if (button) {
      const maxWidth = window.innerWidth - button.offsetWidth;
      const maxHeight = window.innerHeight - button.offsetHeight;
      const randomWidth = Math.floor(Math.random() * maxWidth);
      const randomHeight = Math.floor(Math.random() * maxHeight);
      button.style.position = "absolute";
      button.style.left = `${randomWidth}px`;
      button.style.top = `${randomHeight}px`;
    }
  };

  const handleLove = () => {
    setText("Wow! Thanks");
  };

  return (
    <div className="h-screen flex items-center justify-center w-screen overflow-hidden">
      <div className="py-8 px-8 border rounded-xl flex items-center justify-center flex-col">
        <h1 className="text-xl">{text}</h1>
        <div className="flex items-center justify-center mt-7" id="box">
          <Heart
            isClick={isClick}
            onClick={() => {
              setClick(!isClick);
              handleLove();
            }}
          />
          <button
            onMouseEnter={handleRandomPosition}
            ref={ButtonRef}
            className="px-4 text-white rounded-xl bg-red-500 py-2 ml-2"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
