const fs = require("fs-extra");
const Purgecss = require("purgecss");

const purgecss = new Purgecss({
  content: ["./demo-purge/*.html"],
  css: ["./demo-purge/css/*.css"]
});

const purgecssResult = purgecss.purge();

const result = purgecssResult[0].css;

fs.outputFile("./demo-purge/css/purged.css", result, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
