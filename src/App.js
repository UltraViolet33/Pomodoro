import { useEffect, useState } from "react";
import "./App.css";
import { Length } from "./components/Length";

export const App = () => {
  const [isRunning, setIsRunning] = useState(false);

  const [state, setState] = useState({
    minutes: 25,
    seconds: 0,
  });

  const startTimer = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let interval = null;
    if (isRunning) {
       interval = setInterval(() => {
        const { seconds, minutes } = state;

        console.log(state);

        if (seconds > 0) {
          const newState = { minutes: minutes, seconds: seconds - 1 };
          setState(newState);
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            const newState = { minutes: minutes - 1, seconds: 59 };
            setState(newState);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state, isRunning]);

  return (
    <div>
      <h1 className="center">25 + 5 Clock</h1>
      <div className="control-container">
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
      </div>
      <div className="session-container">
        <p id="timer-label">Session</p>
        <p id="timer-left">
          {state.minutes}:
          {state.seconds < 10 ? `0${state.seconds}` : state.seconds}
        </p>
      </div>
      <div className="control-container">
        <button id="start-stop" onClick={startTimer}>
          Start
        </button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
};
