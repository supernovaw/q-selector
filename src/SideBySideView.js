import LevelView from "./LevelView";
import { useRef, useState } from "react";
import "./SideBySideView.css";
import constants from "./constants";
import levelTitleFormatter from "./levelTitleFormatter";

const { imgPathPrefix, levelSuffixes, imgPathSuffix } = constants;
const genImgPath = (imgName, levelSuffix) => imgPathPrefix + imgName + levelSuffix + imgPathSuffix;
//                                   i.e.: "/images/" + "20220920_044901" + "-high" + ".jpg"

const SideBySideView = ({ imgName, sizes }) => {
  const parentRef = useRef();
  const [selected, onSelect] = useState(null);

  return (
    <div className="SideBySideView" ref={parentRef}>
      {levelSuffixes.map(lvlSuf => (
        <LevelView key={lvlSuf} {...{ parentRef }}
          onSelect={() => onSelect(lvlSuf)}
          selected={lvlSuf === selected}
          title={levelTitleFormatter(lvlSuf, sizes)}
          imagePath={genImgPath(imgName, lvlSuf)} />
      ))}
    </div>
  );
};

export default SideBySideView;
