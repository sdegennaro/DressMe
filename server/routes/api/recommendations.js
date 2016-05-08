var express                  = require('express'),
    recommendationRouter     = express.Router(),
    Recommendation           = require('../../models/recommendation.js');

// Create a new user

recommendationRouter.get('/', function(req, res, next) {
  var degrees = req.query.degrees;
  var weather = req.query.description;

  Recommendation.find({}, function (){
    res.json({recommendation: response});  
  })
})
