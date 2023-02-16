import "./App.css";
import { Length } from "./components/Length";

export const App = () => {
  return (
    <div>
      <h1 className="center">25 + 5 Clock</h1>
      <Length labelId="break-label" title="Break" lengthDuration="5" incrementId="break-increment" decrementId="break-decrement" />
      <Length labelId="session-label" title="Session" lengthDuration="25" incrementId="session-increment" decrementId="session-decrement" />
    </div>
  );
};
