const express = require('express')
var multer  = require('multer')
// var upload = multer({ dest: 'public/uploads/' })
const app = express()
var path = require('path');
var serveIndex = require('serve-index')
var find = require('list-files');


/// array of files in deirectory
find(function(result) {
    console.log(result);
    //=> './dirname/a.js' 
    //=> './dirname/b.js' 
}, {
    dir: 'public/uploads/',
    name: 'png'
});


// app.get('/', function (req, res) {
//   res.send('Tu sa bude tvorit mega projeeekt 222')
// })

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

/*
// Multer - post image
*/

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')                     // where to save file
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)  // saved file name
  }
})

var upload = multer({ storage: storage })

app.post('/', upload.single('myimage'), function (req, res, next) { // myimage = input field name
  res.send(req.files)
})

// Serve URLs like /ftp/thing as public/ftp/thing
app.use('/uploads', serveIndex('public/uploads', {'icons': true}))

// public folder is public 
app.use(express.static('public'))

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


