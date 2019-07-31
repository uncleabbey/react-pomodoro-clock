import React from "react";

const Options = ({ breakLength, sessionLength, handleOptionsButtons }) => (
  <div id="options" onClick={handleOptionsButtons}>
    <div id="break-options">
      <p id="break-label">Break Length</p>
      <button className="btn btn-dark">
        <i id="break-increment">+</i>
      </button>
      <button id="break-length">{breakLength}</button>
      <button className="btn btn-danger">
        <i id="break-decrement">-</i>
      </button>
    </div>
    <div id="session-options">
      <p id="session-label">Session Length</p>
      <button className="btn btn-dark">
        <i id="session-increment">+</i>
      </button>
      <button id="session-length">{sessionLength}</button>
      <button className="btn btn-danger">
        <i id="session-decrement">-</i>
      </button>
    </div>
  </div>
);

export default Options;
