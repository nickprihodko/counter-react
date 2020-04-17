import React from "react";
import "./counter.css";

export default function Counter({ value, setValue }) {
  return (
    <div>
      <div className="buttons" onClick={setValue}>
        <button className="btn">Increment</button>
        <button className="btn">Decrement</button>
        <button className="btn">Reset</button>
      </div>
      <div className="label">
        <label>Value:</label>
        <span>{value}</span>
      </div>
    </div>
  );
}
