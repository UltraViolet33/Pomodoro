import { useState } from "react";

export const Length = ({
  title,
  lengthDuration,
  labelId,
  spanId,
  incrementId,
  decrementId,
  decrement,
  increment
}) => {
  const [duration, setDuration] = useState(lengthDuration);


  return (
    <div>
      <h3 id={labelId}>{title} Length</h3>
      <div className="controls-length">
        <span onClick={increment} id={incrementId}>+</span>
        <span id={spanId}>{lengthDuration}</span>
        <span onClick={decrement} id={decrementId}>-</span>
      </div>
    </div>
  );
};
