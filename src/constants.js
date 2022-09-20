const constants = {
  imgPathPrefix: "/images/",
  levelSuffixes: ["-raw", "-high", "-mid", "-low"], // the set of levels and their order is defined here
  levelNames: {
    "-raw": "Original",
    "-high": "High",
    "-mid": "Mid",
    "-low": "Low"
  },
  originalSuffix: "-raw", // compare with this one in i.e. "Low: 50 KiB, 5.7% of original"
  imgPathSuffix: ".jpg",
};

export default constants;
