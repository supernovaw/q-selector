import { useRef } from "react";
import "./App.css";
import LevelView from "./LevelView";

const App = () => {
  const parentRef = useRef();

  return (
    <div className="App" ref={parentRef}>
      <LevelView {...{ parentRef }} imagePath="/images/example-raw.jpg" />
      <LevelView {...{ parentRef }} imagePath="/images/example-high.jpg" />
      <LevelView {...{ parentRef }} imagePath="/images/example-mid.jpg" />
      <LevelView {...{ parentRef }} imagePath="/images/example-low.jpg" />
    </div>
  );
}

export default App;
