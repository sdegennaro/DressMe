var recommendationArray = [
      {
        name: "men-1",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 95,
        maxTemp: 190,
        outfit: "/images/mens/men-1.jpg",
        text: "Hey Dude! It's crazy hot today. Wear as little as possible."
      },
      {
        name: "men-2",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 80,
        maxTemp: 94.99,
        outfit: "/images/mens/men-2.jpg",
        text: "Hey Dude! It's cloudy today. Wear a hoodie."
      },
      {
        name: "men-3",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 70,
        maxTemp: 79.99,
        outfit: "/images/mens/men-3.jpg",
        text: "Hey Dude! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "men-4",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 60,
        maxTemp: 69.99,
        outfit: "/images/mens/men-4.jpg",
        text: "Hey Dude! It's snowing! Wear your heavist coat."
      },
      {
        name: "men-5",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 50,
        maxTemp: 59.99,
        outfit: "/images/mens/men-5.jpg",
        text: "Hey Girl! It's crazy hot today. Wear as little as possible."
      },
      {
        name: "men-6",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: 35,
        maxTemp: 49.99,
        outfit: "/images/mens/men-6.jpg",
        text: "Hey Girl! It's cloudy today. Wear a hoodie."
      },
      {
        name: "men-7",
        gender: "male",
        rain: false,
        snow: false,
        minTemp: -30,
        maxTemp: 34.99,
        outfit: "/images/mens/men-7.jpg",
        text: "Hey Girl! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "men-8",
        gender: "male",
        rain: true,
        snow: false,
        minTemp: 90,
        maxTemp: 190,
        outfit: "/images/mens/men-8.jpg",
        text: "Hey Girl! It's snowing! Wear your heavist coat."
      },
      {
        name: "men-9",
        gender: "male",
        rain: true,
        snow: false,
        minTemp: 80,
        maxTemp: 89.99,
        outfit: "/images/mens/men-9.jpg",
        text: "Hey Girl! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "men-10",
        gender: "male",
        rain: true,
        snow: false,
        minTemp: 70,
        maxTemp: 79.99,
        outfit: "/images/mens/men-10.jpg",
        text: "Hey Girl! It's snowing! Wear your heavist coat."
      },
      {
        name: "men-11",
        gender: "male",
        rain: true,
        snow: false,
        minTemp: 60,
        maxTemp: 69.99,
        outfit: "/images/mens/men-11.jpg",
        text: "Hey Dude! It's crazy hot today. Wear as little as possible."
      },
      {
        name: "men-12",
        gender: "male",
        rain: true,
        snow: false,
        minTemp: 50,
        maxTemp: 59.99,
        outfit: "/images/mens/men-12.jpg",
        text: "Hey Dude! It's cloudy today. Wear a hoodie."
      },
      {
        name: "men-13",
        gender: "male",
        rain: true,
        snow: false,
        minTemp: 35,
        maxTemp: 49.99,
        outfit "/images/mens/men-13.jpg",
        text: "Hey Dude! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "men-14",
        gender: "male",
        rain: true,
        snow: false,
        minTemp: -30,
        maxTemp: 34.99,
        outfit: "/images/mens/men-14.jpg",
        text: "Hey Dude! It's snowing! Wear your heavist coat."
      },
      {
        name: "men-15",
        gender: "male",
        rain: false,
        snow: true,
        minTemp: 35,
        maxTemp: 80,
        outfit: "/images/mens/men-15.jpg",
        text: "Hey Girl! It's crazy hot today. Wear as little as possible."
      },
      {
        name: "men-16",
        gender: "male",
        rain: false,
        snow: true,
        minTemp: -30,
        maxTemp: 34.99,
        outfit: "/images/mens/men-16.jpg",
        text: "Hey Girl! It's cloudy today. Wear a hoodie."
      },
      {
        name: "men-17",
        gender: "male",
        rain: true,
        snow: true,
        minTemp: 35,
        maxTemp: 80,
        outfit: "/images/mens/men-17.jpg",
        text: "Hey Girl! It's raining like cats and dogs. Don't forget your umbrella."
      },
      {
        name: "men-18",
        gender: "male",
        rain: true,
        snow: true,
        minTemp: -30,
        maxTemp: 34.99,
        outfit: "/images/mens/men-18.jpg",
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
