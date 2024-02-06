import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={handleToggle}>{isRunning ? "Stop" : "Start"}</button>
    </div>
  );
};

export default TimerComponent;
