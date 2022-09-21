import "./styles/App.css";
import SideBySideView from "./SideBySideView";
import ImagesListPanel from "./ImagesListPanel";
import { useState } from "react";
import constants from "../constants";
const { imagesList } = constants;

const App = () => {
  const [selections, setSelections] = useState({}); // i.e. { "img_name": "-mid", ... }
  const [currentImage, setCurrentImage] = useState(imagesList[0]);

  const onLevelSelected = lvl => {
    setSelections(o => ({ ...o, [currentImage.name]: lvl }));

    // switch to next image
    const currentIndex = imagesList.indexOf(currentImage);
    if (currentIndex + 1 < imagesList.length) {
      setTimeout(() => setCurrentImage(imagesList[currentIndex + 1]), 200);
    }
  };

  return (
    <div className="App">
      <ImagesListPanel {...{ currentImage, selections }} onImageSelected={setCurrentImage} />
      <SideBySideView imgName={currentImage.name}
        sizes={currentImage.sizes}
        level={selections[currentImage.name]}
        onLevelSelected={onLevelSelected} />
    </div>
  );
}

export default App;
