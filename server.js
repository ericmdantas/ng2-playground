"use strict";
var express = require('express');
var app = express();
var PORT = 7788;
app.use(express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.send('index.html');
});
app.get('/todos', function (req, res) {
    var _res = [{ "id": 0, "message": "abc0" },
        { "id": 1, "message": "abc1" },
        { "id": 2, "message": "abc2" },
        { "id": 3, "message": "abc3" },
        { "id": 4, "message": "abc4" },
        { "id": 5, "message": "abc5" },
        { "id": 6, "message": "abc6" },
        { "id": 7, "message": "abc7" }];
    res.json(_res);
});
app.listen(PORT);
console.log('up');
