var express           = require('express'),
    recRouter         = express.Router(),
    Recommendation    = require('../../models/recommendation.js');

// Create a new user

recRouter.get('/', function(req, res, next) {
  var temp = req.query.degrees;
  var rain = req.query.rain;
  var snow = req.query.snow;
  var gender = req.query.gender;

  console.log("T " + temp);
  console.log("R " + rain);
  console.log("S " + snow);
  console.log("G " + gender);

  Recommendation.find({
    maxTemp : { $gte : temp },
    minTemp : { $lte : temp },
    rain : rain,
    snow : snow,
    gender: gender
  }, function(err,response){
    console.log("Response: " + response);
    res.json({rec : response})
  })
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
