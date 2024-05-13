export default {
  source: {
    entry: {
      demo: "./main.js",
    },
  },
  output: {
    targets: ["node"],
    sourceMap: {
      js: "source-map",
      minify: true,
    },
    distPath: {
      root: "out",
      js: ".",
    },
  },
};
