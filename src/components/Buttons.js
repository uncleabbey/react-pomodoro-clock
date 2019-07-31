import React from "react";

const Buttons = ({ handleResetButton, handleStartButton }) => (
  <div id="buttons">
    <p id="start_stop" onClick={handleStartButton}>
      <button className="btn btn-lg btn-primary">Start{"  "}</button>
      <button className="btn btn-lg btn-danger">Stop</button>
    </p>
    <p id="reset" onClick={handleResetButton}>
      <button className="btn btn-lg btn-info">Reset</button>
    </p>
  </div>
);

export default Buttons;
