var express = require("express");
var router = express.Router();

var path = require('path');

router.get('/', function(req, res, next) {
  res.sendFile( path.resolve('client/public/views/index.html') );
});

router.get('/', function(req, res, next) {
  res.render('index');
});




module.exports = router;
