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


function func() {
    fs.watch('imgin/', function (eventType, filename) {
        if(eventType != 'change')
        {
            return;
        }
        let id;
        lpr.parse('imgin/' + filename, (out) => {
            //pool.query('INSERT INTO license_plate (plate_text) VALUES ($1)', [out.plate]);
            console.log(out.plate);
            fs.rename('imgin/' + filename, 'imgout/' + filename, function() {});
        });
    });
}

func();
console.log('Watching for new files!');

