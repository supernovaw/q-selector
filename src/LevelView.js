import "./LevelView.css";

const LevelView = ({ imagePath, parentRef, title }) => {
  const onMouseMove = e => { // update the absolute position of the "magnification lens" (or "pointer")
    parentRef.current.style.setProperty("--pointer-x", e.nativeEvent.layerX + "px");
    parentRef.current.style.setProperty("--pointer-y", e.nativeEvent.layerY + "px");
  };
  return (
    <div className="LevelView">
      <div>{title}</div>
      <div className="view-container" onMouseMove={onMouseMove}>
        <div className="pointer" style={{ backgroundImage: `url(${imagePath})` }} />
        <img src={imagePath} draggable={false} />
        <div className="pointer-shape" />
      </div>
    </div>
  );
};

export default LevelView;
