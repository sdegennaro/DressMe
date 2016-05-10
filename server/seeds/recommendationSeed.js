var recommendationArray = [
      {
        name: "men-1",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 80,
        maxTemp: 90,
        outfit: "https://t1.ftcdn.net/jpg/00/55/12/64/1pg",
        text: "Hey Dude! It's crazy hot today. Wear as little as possible."
      },
      {
        name: "men-2",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 60,
        maxTemp: 80,
        url: "http://blogs.worldbank.org/files/ic4d/01cloudy-t9953.jpg",
        text: "Hey Dude! It's cloudy today. Wear a hoodie."
      },
      {
        name: "men-3",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 50,
        maxTemp: 70,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Dude! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "men-4",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 0,
        maxTemp: 50,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Dude! It's snowing! Wear your heavist coat."
      },
      {
        name: "men-5",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 80,
        maxTemp: 90,
        url: "https://t1.ftcdn.net/jpg/00/55/12/64/160_F_55126421_UkxlTpL0Ost5O0UG1uYfPSY67yXvlpb6.jpg",
        text: "Hey Girl! It's crazy hot today. Wear as little as possible."
      },
      {
        name: "men-6",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 60,
        maxTemp: 80,
        url: "http://blogs.worldbank.org/files/ic4d/01cloudy-t9953.jpg",
        text: "Hey Girl! It's cloudy today. Wear a hoodie."
      },
      {
        name: "men-7",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 50,
        maxTemp: 70,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Girl! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "men-8",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 0,
        maxTemp: 50,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Girl! It's snowing! Wear your heavist coat."
      },
      {
        name: "men-9",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 50,
        maxTemp: 70,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Girl! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "men-10",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 0,
        maxTemp: 50,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Girl! It's snowing! Wear your heavist coat."
      },
      {
        name: "men-11",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 80,
        maxTemp: 90,
        outfit: "https://t1.ftcdn.net/jpg/00/55/12/64/1pg",
        text: "Hey Dude! It's crazy hot today. Wear as little as possible."
      },
      {
        name: "men-12",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 60,
        maxTemp: 80,
        url: "http://blogs.worldbank.org/files/ic4d/01cloudy-t9953.jpg",
        text: "Hey Dude! It's cloudy today. Wear a hoodie."
      },
      {
        name: "men-13",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 50,
        maxTemp: 70,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Dude! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "men-14",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 0,
        maxTemp: 50,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Dude! It's snowing! Wear your heavist coat."
      },
      {
        name: "men-15",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 80,
        maxTemp: 90,
        url: "https://t1.ftcdn.net/jpg/00/55/12/64/160_F_55126421_UkxlTpL0Ost5O0UG1uYfPSY67yXvlpb6.jpg",
        text: "Hey Girl! It's crazy hot today. Wear as little as possible."
      },
      {
        name: "men-16",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 60,
        maxTemp: 80,
        url: "http://blogs.worldbank.org/files/ic4d/01cloudy-t9953.jpg",
        text: "Hey Girl! It's cloudy today. Wear a hoodie."
      },
      {
        name: "men-17",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 50,
        maxTemp: 70,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Girl! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "men-18",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 0,
        maxTemp: 50,
        url: "http://www.vectorportal.com/img_novi/rainy3_7188.jpg",
        text: "Hey Girl! It's snowing! Wear your heavist coat."
      },
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
