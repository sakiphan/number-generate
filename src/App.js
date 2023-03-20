import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [maxVal, setMaxVal] = useState(100);
  const [minVal, setMinVal] = useState(1);
  const [randomVal, setRandomVal] = useState(5);

  const giveRandomNumb = () => {
    setRandomVal(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };
  return (
    <div className="hero">
      <div className="container">
        <div className="randomNumber">
          <p>
            Randon Number:<span>{randomVal}</span>{" "}
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input
              type="number"
              value={minVal}
              onChange={(e) => setMaxVal(e.target.value)}
            />
          </div>
        </div>
        <div className="numContainer">
          <div>
            <p>Max:</p>
            <input
              type="number"
              value={maxVal}
              onChange={(e) => setMinVal(e.target.value)}
            />
          </div>
        </div>
        <button onClick={giveRandomNumb}>Get Randon Number</button>
      </div>
    </div>
  );
};

export default App;
