const constants = {
  imgPathPrefix: "/images/",
  levelSuffixes: ["-raw", "-high", "-mid", "-low"], // the set of levels and their order is defined here
  levelNames: {
    "-raw": "Original",
    "-high": "High",
    "-mid": "Mid",
    "-low": "Low"
  },
  levelNamesShort: {
    "-raw": "raw",
    "-high": "high",
    "-mid": "mid",
    "-low": "low"
  },
  originalSuffix: "-raw", // compare with this one in i.e. "Low: 50 KiB, 5.7% of original"
  imgPathSuffix: ".jpg",
  imagesList: [
    {
      name: "example",
      sizes: { "-high": 140890, "-low": 49900, "-mid": 114725, "-raw": 463045 }
    }, {
      name: "test-vertical",
      sizes: { "-high": 42999, "-low": 42999, "-mid": 42999, "-raw": 42999 }
    }
  ],
};

export default constants;
