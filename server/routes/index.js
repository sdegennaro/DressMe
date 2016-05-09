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

router.get('/key',function(req,res,next){
  res.json({API_KEY: process.env.WEATHER_API_KEY})
})


module.exports = router;
