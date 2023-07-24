import React, { FC, useEffect, useState } from "react";
import "./CurrentTimeDisplayWithWidget.css";
import { use24StreamWidget } from "../../use24StreamWidget";

const CurrentTimeDisplayWithWidget: FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  use24StreamWidget();
  return (
    <div
      className="current-time-display-with-widget"
      data-time={currentTime.toString()}
    >
      <div className="current-time-display-with-widget__time">
        {currentTime.toString()}
      </div>
      <div className="exampleWrapperContent"></div>
    </div>
  );
};

export { CurrentTimeDisplayWithWidget };
