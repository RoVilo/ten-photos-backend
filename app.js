const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/users', function(req, res) {
    console.log('Requested users');
    res.send('List of users');
})

app.get('/users/:userid', function(req, res) {
    console.log('Requested users');
    res.send('Deatail of user ' + req.params.userid);
})