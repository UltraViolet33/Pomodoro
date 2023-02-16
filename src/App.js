import { useState } from "react";
import "./App.css";
import { Length } from "./components/Length";

export const App = () => {
  const [time, setTime] = useState(25);

  return (
    <div>
      <h1 className="center">25 + 5 Clock</h1>
      <Length
        labelId="break-label"
        title="Break"
        lengthDuration="5"
        incrementId="break-increment"
        decrementId="break-decrement"
      />
      <Length
        labelId="session-label"
        title="Session"
        lengthDuration="25"
        incrementId="session-increment"
        decrementId="session-decrement"
      />
      <div>
        <p id="timer-label">Session</p>
        <p id="timer-left">{time}</p>
      </div>

      <div>
        <button id="start-stop">Start</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
};
