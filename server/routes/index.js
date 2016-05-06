var express = require("express");
var router = express.Router();

var path = require('path');

// SAM- this is from template, downloads a file of the view rather than rendering it. 
// router.get('/', function(req, res, next) {
//   res.sendFile( path.resolve('client/public/views/index.ejs') );
// });

router.get('/', function(req, res, next) {
  res.render('index');
});




module.exports = router;
