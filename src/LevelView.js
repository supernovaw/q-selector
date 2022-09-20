import { useRef } from "react";
import "./LevelView.css";

// The assigned variable helps prevent the "lens" from going outside of vertical (tall) images
function assignImageRatioCssVar(imgRef, targetRef) {
  const { naturalWidth: w, naturalHeight: h } = imgRef.current;
  targetRef.current.style.setProperty("--image-aspect-ratio", w / h);
}

const LevelView = ({ imagePath, parentRef, title }) => {
  const imgRef = useRef();
  const onImgLoad = () => assignImageRatioCssVar(imgRef, parentRef);

  const onMouseMove = e => { // update the absolute position of the "magnification lens" (or "pointer")
    parentRef.current.style.setProperty("--pointer-x", e.nativeEvent.layerX + "px");
    parentRef.current.style.setProperty("--pointer-y", e.nativeEvent.layerY + "px");
  };
  return (
    <div className="LevelView">
      <div>{title}</div>
      <div className="view-container" onMouseMove={onMouseMove}>
        <img src={imagePath} draggable={false} className="pointer" />
        <img src={imagePath} draggable={false} ref={imgRef} onLoad={onImgLoad} />
        <div className="pointer-shape" />
      </div>
    </div>
  );
};

export default LevelView;
