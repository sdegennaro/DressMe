var express = require("express");
var router = express.Router();

var path = require('path');
var twilio = require("twilio");

var accountSid = process.env.TWILIO_ACCOUNTSID;
var authToken = process.env.TWILIO_AUTHTOKEN;
var client = require('twilio')(accountSid, authToken);


router.post('/test',function(req, res, next){
  client.messages.create({
    body: req.body.message,
    to: req.body.to,
    from: "+12038899355"
  }, function(err, message) {
    if(err){
      console.log(err);
    }else{
    process.stdout.write(message.sid);
    console.log(" yoooo");
  }
  });
})



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

router.get('/text', function(req, res, next) {
  res.render('texttest');
});

module.exports = router;
