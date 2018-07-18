var express = require("express");
var Pool = require("pg").Pool;
var bodyParser = require("body-parser");

var app = express();
var config = {
   host: 'localhost',
   user: 'postgres',
   password: 'Code11',
   database: 'hackathon'
};
var pool = new Pool(config);

app.set('port', (8082));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/test-api', async (req, res) => {
   console.log('GOT EM!!!!!!!!!');
   res.json({status: 'user added'});
});

app.get('/Employee-LP', async (req,res) => {
    var allEmployees = await pool.query('select license_plate.id, plate_text, time_stamp from license_plate join employee on license_plate.id = employee.id join activity on employee.id = activity.id');
    console.log(allEmployees);
    var tempJson = {id: [], plate_text: [], time_stamp: []};
    for (var i = 0; i < allEmployees.rowCount; i++) {
       tempJson.id[i] = allEmployees.rows[i].id;
        tempJson.plate_text[i] = allEmployees.rows[i].plate_text;
        tempJson.time_stamp[i] = allEmployees.rows[i].time_stamp;
   }
    res.json(tempJson);
});

app.get('/Other-LP', async (req,res) => {
    var allOther = await pool.query('select license_plate.id, plate_text, time_stamp from license_plate join other on license_plate.id = other.id join activity on other.id = activity.id');
    console.log(allOther);
    var tempJson = {id: [], plate_text: [], time_stamp: []};
    for (var i = 0; i < allOther.rowCount; i++) {
       tempJson.id[i] = allOther.rows[i].id;
        tempJson.plate_text[i] = allOther.rows[i].plate_text;
        tempJson.time_stamp[i] = allOther.rows[i].time_stamp;
   }
    res.json(tempJson);
});

app.get('/All-LP', async (req,res) => {
    var all = await pool.query('select license_plate.id, plate_text, time_stamp from license_plate join activity on license_plate.id = activity.id');
    console.log(all);
    var tempJson = {id: [], plate_text: [], time_stamp: []};
    for (var i = 0; i < all.rowCount; i++) {
       tempJson.id[i] = all.rows[i].id;
        tempJson.plate_text[i] = all.rows[i].plate_text;
        tempJson.time_stamp[i] = all.rows[i].time_stamp;
   }
    res.json(tempJson);
});
app.get('/Add-Incidence', async (req,res) => {
    var plate_text = req.query.plate_text;
    var id = await pool.query('select * from license_plate where plate_text = $1', [plate_text]);
    if (id.rowCount == 0) {
        await pool.query('insert into license_plate (plate_text) values ($1)', [plate_text]);
        res.json({status: 'license_plate added'});
        id = await pool.query('select * from license_plate where plate_text = $1', [plate_text]);
    }
    await pool.query('insert into activity (id, time_stamp) values ($1, current_timestamp)', [id.rows[0].id]);
    
    var isEmployee = await pool.query('select * from employee where id = $1', [id.rows[0].id]);
    if (isEmployee.rowCount == 0) {
        var existInOther = await pool.query('select * from other where id = $1', [id.rows[0].id]);
        if (existInOther.rowCount == 0) {
            await pool.query('insert into other (id) values ($1)', [id.rows[0].id]);
        }
    }
    console.log(id);
    res.json({status: 'Group Determined'});
});
app.get('/Add-Employee', async (req,res) => {
    var employee = req.query.plate_text;
    console.log(employee);
    var isEmployee = await pool.query('select * from license_plate where plate_text = $1', [employee]);
    console.log(isEmployee);
    if (isEmployee.rowCount == 0) {
        await pool.query('insert into license_plate (plate_text) values ($1)', [employee]);
        isEmployee = await pool.query('select * from license_plate where plate_text = $1', [employee]);
    }
    var alreadyEmployee  = await pool.query('select * from employee where id = $1', [isEmployee.rows[0].id]);
    if (alreadyEmployee.rowCount == 0){
        await pool.query('insert into employee (id) values ($1)', [isEmployee.rows[0].id]);
        res.json({status: 'Employee Added'});
    }
    else {
        res.json({status: 'Employee already exists'});
    }
});
app.listen(app.get('port'), () => {
   console.log('server running on port 8082');
});
