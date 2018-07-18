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
    fs.watch('imgin/', async (eventType, filename) {
        if(eventType != 'change')
        {
            return;
        }
        let id;
        lpr.parse('imgin/' + filename, (out) => {
            var id = await pool.query('SELECT * FROM license_plate WHERE plate_text = $1', [out.plate]);
            if(id.rowCount == 0) {
                await pool.query('INSERT INTO license_plate (plate_text) VALUES ($1)', [out.plate]);
                id = await pool.query('SELECT * FROM license_plate WHERE plate_text = $1', [out.plate]);
            }
            await pool.query('INSERT INTO activity (id, time_stamp) VALUES ($1, current_timestamp)', 
                [id.rows[0].id]);

            var isEmployee = await pool.query('SELECT * FROM other WHERE id = $1', [id.rows[0].id]);
            if(isEmployee.rowCount == 0) {
                var existInOther = await pool.query('SELECT * FROM other WHERE id = $1',
                    [id.rows[0].id]);
                if(existInOther.rowCount == 0) {
                    await pool.query('insert into other (id) values ($1)', [id.rows[0].id]);
                }
            }
            fs.rename('imgin/' + filename, 'imgout/' + filename, function() {});
        });
    });
}

func();
