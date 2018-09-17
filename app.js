const extractor = require('media-query-extractor');
const fs = require('fs-extra');

fs.removeSync('./dist/');
fs.ensureDirSync('./dist/');

extractor( 'src/atomic.css', 'dist/atomic-default.css', [
    '(min-width:482px)|dist/atomic-small.css',
    '(min-width:701px)|dist/atomic-medium.css',
    '(min-width:1026px)|dist/atomic-large.css'
]);
