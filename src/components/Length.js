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
      <div>
        <div id={incrementId}>+</div>
        <p>{lengthDuration}</p>
        <div id={decrementId}>-</div>
      </div>
    </div>
  );
};
