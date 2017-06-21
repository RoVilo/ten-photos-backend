const express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads/' })
const app = express()


app.get('/', function (req, res) {
  res.send('Tu sa bude tvorit mega projeeekt 222')
})

// var port = process.env.port || 3000;

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

app.post('/', upload.any(), function (req, res, next) {
  res.send(req.files)
})
