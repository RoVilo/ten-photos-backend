const express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads/' })
const app = express()
var path = require('path');
var serveIndex = require('serve-index')



// app.get('/', function (req, res) {
//   res.send('Tu sa bude tvorit mega projeeekt 222')
// })

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', upload.single('avatar'), function (req, res, next) {
  res.send(req.files)
})

// Serve URLs like /ftp/thing as public/ftp/thing
app.use('/files', serveIndex('public/uploads', {'icons': true}))

// var port = process.env.port || 3000;

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})

// app.get('/users', function(req, res) {
//     console.log('Requested users');
//     res.send('List of users');
// })

// app.get('/users/:userid', function(req, res) {
//     console.log('Requested users');
//     res.send('Deatail of user ' + req.params.userid);
// })


