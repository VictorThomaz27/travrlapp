module.exports = {
  root: true,
  extends: '@react-native',
  {
    "prettier/prettier": [
      "error",
      {},
      {
        "fileInfoOptions": {
          "withNodeModules": true
        }
      }
    ]
  }
};
