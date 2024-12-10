import React, { useState, useEffect } from "react";

const FlashSaleTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.days * 86400 +
          prev.hours * 3600 +
          prev.minutes * 60 +
          prev.seconds;
        if (totalSeconds <= 0) {
          clearInterval(countdown);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        const nextTotalSeconds = totalSeconds - 1;

        return {
          days: Math.floor(nextTotalSeconds / 86400),
          hours: Math.floor((nextTotalSeconds % 86400) / 3600),
          minutes: Math.floor((nextTotalSeconds % 3600) / 60),
          seconds: nextTotalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const timeLabels = ["Days", "Hours", "Minutes", "Seconds"];
  const timeValues = Object.values(timeLeft).map((value) =>
    value.toString().padStart(2, "0")
  );

  return (
    <div
      className="flex items-center justify-center bg-gray-200 rounded-lg p-4"
      style={{ width: "302px", height: "50px" }}
    >
      {timeValues.map((value, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center mx-1">
            {/* text */}
            <span className="text-xs text-red-500">{timeLabels[index]}</span>
            {/* Number */}
            <span className="text-2xl font-bold">{value}</span>
          </div>
          {/* Points */}
          {index < timeValues.length - 1 && (
            <div className="flex  w-full">
              <span className="text-red-500 text-xl font-bold mt-5">:</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FlashSaleTimer;
