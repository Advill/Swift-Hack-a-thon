const lpr = require('./licenseplatereader');
var plate = lpr.parse(process.argv[2]).plate;
console.log(plate);
