const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var port = process.env.port || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})

app.get('/users', function(req, res) {
    console.log('Requested users');
    res.send('List of users');
})

app.get('/users/:userid', function(req, res) {
    console.log('Requested users');
    res.send('Deatail of user ' + req.params.userid);
})