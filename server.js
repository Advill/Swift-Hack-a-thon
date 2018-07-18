const http = require('http');
const request = require('request');
const fs = require('fs');

function writeTable(res, data) {
    console.log(data);
    for (i = 0; i < data.id.length; i++) {
        res.write('<tr>\n<th>' + data.id[i] + '</th>\n<th>' + 
            data.plate_text[i] + '</th>\n<th>' + data.time_stamp[i] + '</th>\n')
    }
}


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    var url = req.url;
    res.write('<html>\n<body>\n');
    res.write('<h1>' + url + '</h1>');
    res.write('<table style="width:100%">');
    if(url == '/employee') {
        request({
            url:'http://localhost:8082/Employee-LP',
            json:true
        }, function (error, response, body) {
            if(!error && response.statusCode == 200) {
                writeTable(res, body);
            }
            else {
                console.log(response.statusCode);
            }
        });
    }
    else if (url == '/other') {
        request({
            url:'http://localhost:8082/Other-LP',
            json:true
        }, function (error, response, body) {
            if(!error && response.statusCode == 200) {
                writeTable(res, body);
            }
            else {
                console.log(response.statusCode);
            }
        });
    }
    else if (url == '/all') {
        request({
            url:'http://localhost:8082/ALL-LP',
            json:true
        }, function (error, response, body) {
            if(!error && response.statusCode == 200) {
                writeTable(res, body);
            }
            else {
                console.log(response.statusCode);
            }
        });
    }
}).listen(8080);

