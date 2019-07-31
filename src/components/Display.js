import React from "react";

const displayDigits = units => {
  units = units.toString();
  if (units.length === 1) {
    return `0${units}`;
  } else {
    return units.toString();
  }
};

const Display = ({ sessionSeconds, breakSeconds, inBreak }) => (
  <div>
    <h2 id="timer-label">{inBreak ? "Break" : "Session"}</h2>
    {inBreak ? (
      <h2 id="time-left">
        {displayDigits(Math.floor(breakSeconds / 60))}:
        {displayDigits(breakSeconds % 60)}
      </h2>
    ) : (
      <h2 id="time-left">
        {displayDigits(Math.floor(sessionSeconds / 60))}:
        {displayDigits(sessionSeconds % 60)}
      </h2>
    )}
  </div>
);

export default Display;
