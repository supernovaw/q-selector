import "./App.css";
import SideBySideView from "./SideBySideView";

const App = () => {
  return (
    <div className="App">
      <SideBySideView imgName={"test-vertical"}
        sizes={{
          "-raw": 463045,
          "-high": 140890,
          "-mid": 114725,
          "-low": 49900
        }} />
    </div>
  );
}

export default App;
