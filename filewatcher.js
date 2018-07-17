const fs = require('fs');
const lpr = require('./licenseplatereader');
const { Pool } = require('pg');

var config = {
    host: 'localhost',
    user: 'postgres',
    password: 'Code11',
    database: 'hackathon'
};
var pool = new Pool(config);


fs.watch('imgin/', function (eventType, filename) {
    if(eventType != 'change')
    {
        return;
    }
    lpr.parse('imgin/' + filename, (out) => {
        pool.query('INSERT INTO license_plate (plate_data) VALUES '+ out.plate);
        fs.rename('imgin/' + filename, 'imgout/' + filename, function() {});
    });
});

