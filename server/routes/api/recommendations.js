var express           = require('express'),
    recRouter         = express.Router(),
    Recommendation    = require('../../models/recommendation.js');

// Create a new user

recRouter.get('/', function(req, res, next) {
  var temp = req.query.degrees;
  var rain = req.query.rain;
  var snow = req.query.snow;
  var gender = req.query.gender;

  res.json(req.query);
// Logic goes here to find the correct recommendation based upon degrees and weather
//  Recommendation.find({

//  }, function (err, recResponse){
//    res.json({recommendation: recResponse});
//  })
})

recRouter.post('/', function(req, res){
  var recommendation = new Recommendation(req.body.recommendation);
  console.log("load recommendation");
  recommendation.save(function(err, recData){
    console.log(err);
    res.json(recData)
  });
});

module.exports = recRouter;
