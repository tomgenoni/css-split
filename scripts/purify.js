const purify = require("purify-css");
const fs = require("fs-extra");

fs.ensureDirSync("./demo-purify/css/");

const content = ["./demo-purify/*.html"];
const css = ["./demo-purify/css/*.css"];

const options = {
  // Will write purified CSS to this file.
  output: "./demo-purify/css/purified.css"
};

purify(content, css, options);
