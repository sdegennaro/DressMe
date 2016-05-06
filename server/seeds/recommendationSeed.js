var recommendationArray = [
      {
        name: "sunny, male",
        description: "Sunny",
        gender: "male",
        minTemp: 80,
        maxTemp: 90,
        url: "https://t1.ftcdn.net/jpg/00/55/12/64/160_F_55126421_UkxlTpL0Ost5O0UG1uYfPSY67yXvlpb6.jpg",
        text: "Hey Dude! It's crazy hot today. Wear as little as possible."
      },
      {
        name: "cloudy, male",
        description: "Cloudy",
        gender: "male",
        minTemp: 60,
        maxTemp: 80,
        url: "http://blogs.worldbank.org/files/ic4d/01cloudy-t9953.jpg",
        text: "Hey Dude! It's cloudy today. Wear a hoodie."
      },
      {
        name: "rainy, male",
        description: "Rain",
        gender: "male",
        minTemp: 50,
        maxTemp: 70,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Dude! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "snoy, male",
        description: "Snow",
        gender: "male",
        minTemp: 0,
        maxTemp: 50,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Dude! It's snowing! Wear your heavist coat."
      },
      {
        name: "sunny, female",
        description: "Sunny",
        gender: "female",
        minTemp: 80,
        maxTemp: 90,
        url: "https://t1.ftcdn.net/jpg/00/55/12/64/160_F_55126421_UkxlTpL0Ost5O0UG1uYfPSY67yXvlpb6.jpg",
        text: "Hey Girl! It's crazy hot today. Wear as little as possible."
      },
      {
        name: "cloudy, female",
        description: "Cloudy",
        gender: "female",
        minTemp: 60,
        maxTemp: 80,
        url: "http://blogs.worldbank.org/files/ic4d/01cloudy-t9953.jpg",
        text: "Hey Girl! It's cloudy today. Wear a hoodie."
      },
      {
        name: "rainy, female",
        description: "Rain",
        gender: "female",
        minTemp: 50,
        maxTemp: 70,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Girl! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "rainy, female",
        description: "Snow",
        gender: "female",
        minTemp: 0,
        maxTemp: 50,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Girl! It's snowing! Wear your heavist coat."
      }
  ]

  var mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/dressme_app', function() {

  });

  var Recommendation = require('../models/recommendation.js');

  for (var i = 0; i < recommendationArray.length; i++) {
    Recommendation.create( recommendationArray[i], function( err, recommendation){
      if ( err ) {
        console.log(err);
      }
      console.log('success! created: ' + recommendation.name);
    });
  }
