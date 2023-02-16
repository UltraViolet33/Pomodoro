import { useState } from "react";

export const Length = ({
  title,
  lengthDuration,
  labelId,
  incrementId,
  decrementId,
}) => {
  const [duration, setDuration] = useState(lengthDuration);

  return (
    <div>
      <h3 id={labelId}>{title} Length</h3>
      <div className="controls-length">
        <span id={incrementId}>+</span>
        <span>{lengthDuration}</span>
        <span id={decrementId}>-</span>
      </div>
    </div>
  );
};
