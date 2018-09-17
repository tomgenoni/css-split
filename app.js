const extractor = require('media-query-extractor');
const fs = require('fs-extra');

fs.ensureDirSync('./demo/css/');

// These values are white space sensitive
// The second path is the "left over" css after splitting
extractor( 'src/atomic.css', 'demo/css/atomic-default.css', [
    '(min-width:482px)|demo/css/atomic-small.css',
    '(min-width:701px)|demo/css/atomic-medium.css',
    '(min-width:1026px)|demo/css/atomic-large.css'
]);
