var express = require('express');
var app = express();

var child_process = require('child_process')

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/:file', function (req, res) {
    res.sendFile(__dirname + '/' + req.params.file);
});

var port = 1234;
app.listen(port);
console.log(`Listening at Port ${port}`);
