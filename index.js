const express = require('express')
var cmd = require('node-cmd');
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/ls', function (req, res) {

    cmd.get(
        'dir',
        function (err, data, stderr) {
            res.send('ls :' + data + '>>> err :' + err)
            console.log(data)
            console.log(err)
        }
    );
})

app.get('/host', function (req, res) {

    cmd.get(
        'hostname',
        function (err, data, stderr) {
            res.send('host :' + data + '>>> err :' + err)
        }
    );
})

app.listen(8000)