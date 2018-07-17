const lpr = require('./licenseplatereader');
var out = lpr.parse(process.argv[2], function (out) { console.log(out.plate); });

