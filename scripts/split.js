const extractor = require("media-query-extractor");
const fs = require("fs-extra");

fs.ensureDirSync("./demo-split/css/");

// These values are white space sensitive
// The second path is the "left over" css after splitting
extractor("src/atomic.css", "demo-split/css/atomic-default.css", [
  "(min-width:482px)|demo-split/css/atomic-small.css",
  "(min-width:701px)|demo-split/css/atomic-medium.css",
  "(min-width:1026px)|demo-split/css/atomic-large.css"
]);
