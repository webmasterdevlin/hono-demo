module.exports = {
  entry: "./main.js",
  target: "node",
  output: {
    filename: "demo.js",
    sourceMapFilename: "demo.js.map",
  },
  devtool: "source-map",
  optimization: {
    minimize: true,
  },
  mode: "production",
};
