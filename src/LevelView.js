import { useRef } from "react";
import "./LevelView.css";

const LevelView = () => {
  const ref = useRef();
  const onMouseMove = e => { // update the absolute position of the "magnification lens" (or "pointer")
    ref.current.style.setProperty("--pointer-x", e.nativeEvent.layerX + "px");
    ref.current.style.setProperty("--pointer-y", e.nativeEvent.layerY + "px");
  };
  return (
    <div className="LevelView" ref={ref} onMouseMove={onMouseMove}>
      <div className="pointer" style={{ backgroundImage: "url(/images/example-raw.jpg)" }} />
      <img src="/images/example-raw.jpg" />
      <div className="pointer-shape" />
    </div>
  );
};

export default LevelView;
