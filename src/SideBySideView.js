import LevelView from "./LevelView";
import { useRef } from "react";
import "./SideBySideView.css";
import constants from "./constants";
import levelTitleFormatter from "./levelTitleFormatter";

const { imgPathPrefix, levelSuffixes, imgPathSuffix } = constants;
const genImgPath = (imgName, levelSuffix) => imgPathPrefix + imgName + levelSuffix + imgPathSuffix;
//                                   i.e.: "/images/" + "20220920_044901" + "-high" + ".jpg"

const SideBySideView = ({ imgName, sizes }) => {
  const parentRef = useRef();

  return (
    <div className="SideBySideView" ref={parentRef}>
      {levelSuffixes.map(lvlSuf => (
        <LevelView key={lvlSuf} {...{ parentRef }}
          title={levelTitleFormatter(lvlSuf, sizes)} imagePath={genImgPath(imgName, lvlSuf)} />
      ))}
    </div>
  );
};

export default SideBySideView;
