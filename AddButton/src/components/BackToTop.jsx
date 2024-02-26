import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrolling = () => {
    if (scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  return (
    <div>
      <button
        className={`fixed right-4 bottom-4 ${
          showButton ? "visible" : "invisible"
        }`}
      >
        <MdKeyboardDoubleArrowUp
          onClick={scrollToTop}
          className="text-3xl text-blue-500 animate-bounce"
        />
      </button>
    </div>
  );
};

export default BackToTop;
