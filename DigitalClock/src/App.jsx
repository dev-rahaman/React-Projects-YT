import React, { useEffect, useState } from "react";
import "./app.css";

const App = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([])
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([]));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-dvh">
      <h2 className="font-bold text-9xl">{currentTime}</h2>
    </div>
  );
};

export default App;
