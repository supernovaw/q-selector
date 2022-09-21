import "./styles/ImagesListPanel.css";
import constants from "../constants";
import { useState } from "react";
const { imagesList, levelNamesShort } = constants;

const ImagesListPanel = ({ currentImage, onImageSelected, selections }) => {
  const [nameDisplayMode, setNameDisplayMode] = useState(true); // true - show name, false - show index
  const onRowRightClick = e => { e.preventDefault(); setNameDisplayMode(m => !m) };

  return (
    <div className="ImagesListPanel">
      <table><tbody>
        {imagesList.map((image, i) => (
          <tr key={image.name}
            q-level={selections[image.name]}
            className={currentImage.name === image.name ? "current" : null}
            onContextMenu={onRowRightClick}
            onClick={() => onImageSelected(image)}
          >
            {nameDisplayMode
              ? <td className="show-name">{image.name}</td>
              : <td className="show-index">{i + 1}</td>}
            <td className="level">{levelNamesShort[selections[image.name]] || "–"}</td>
          </tr>
        ))}
      </tbody></table>
    </div>
  );
};

export default ImagesListPanel;
