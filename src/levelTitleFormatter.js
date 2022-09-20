import constants from "./constants";
const { levelNames, originalSuffix } = constants;

// i.e.: 1637682 -> "1.6 MiB"
function formatSize(bytes) {
  const factor = 1024, units = ["bytes", "KiB", "MiB", "GiB"];
  for (let i = 0, unitsCount = bytes; i < 10; i++) {
    if (unitsCount < factor) {
      // show one decimal place if less than ten: 9.8, 9.9, 10, 11
      unitsCount = unitsCount.toFixed(unitsCount < 10 ? 1 : 0);
      return unitsCount + ' ' + units[i];

    } else {
      unitsCount /= factor;
    }
  }
}

// args example: levelSuffix: "-low", sizes: { "-raw": 463045, "-low": 49900,.. }
// returned example: "Low: 49 KiB, 11% of original"
function levelTitleFormatter(levelSuffix, sizes) {
  const thisLevelName = levelNames[levelSuffix];
  const thisSizeInBytes = sizes[levelSuffix];
  const thisSizeFormatted = formatSize(thisSizeInBytes);

  const originalSizeInBytes = sizes[originalSuffix];
  let comparison;
  if (originalSizeInBytes === thisSizeInBytes) comparison = '';
  else {
    let percentage = 100 * thisSizeInBytes / originalSizeInBytes;
    percentage = percentage.toFixed(percentage < 10 ? 1 : 0);
    comparison = ", " + percentage + "% of original";
  }

  return thisLevelName + ": " + thisSizeFormatted + comparison;
}

export default levelTitleFormatter;
