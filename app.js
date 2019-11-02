/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = require('url');

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});
app.use(express.static('public'));
app.use(bodyParser.json());
// app.get('/', function (req, res) {
//     res.send('Hello World!!!!!!!!!!');
// });
app.post('/enterroom', function (req, res) {
    console.log("reqされた中身"+req);
    obj = JSON.parse(req.body);
    console.log("parseされたjson"+obj);
    res.send(obj);
});