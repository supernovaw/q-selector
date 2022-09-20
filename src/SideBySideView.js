import LevelView from "./LevelView";
import { useRef } from "react";
import "./SideBySideView.css";
import constants from "./constants";

const { imgPathPrefix, levelSuffixes, imgPathSuffix } = constants;
const genImgPath = (imgName, levelSuffix) => imgPathPrefix + imgName + levelSuffix + imgPathSuffix;
//                                   i.e.: "/images/" + "20220920_044901" + "-high" + ".jpg"

const SideBySideView = ({ imgName }) => {
  const parentRef = useRef();

  return (
    <div className="SideBySideView" ref={parentRef}>
      {levelSuffixes.map(lvlSuf => (
        <LevelView key={lvlSuf} {...{ parentRef }} imagePath={genImgPath(imgName, lvlSuf)} />
      ))}
    </div>
  );
};

export default SideBySideView;
