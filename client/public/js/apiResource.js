console.log('API is up');

var weatherKey;
var baseURL;
var queryURL;
var userZipcode;
var lowTemp = 0;
var willRain = false;
var willSnow = false;
var gender = "female";

function getKey(){
  $.ajax({
    url: "/key",
    type: "GET",
    success: function(data){
      makeBaseLink(data.API_KEY);
    }
  })
}

function getUserZipcode(){
  $('#update-button').click(function(){
    userZipcode = $("#account-container").find("[name=zipcode]").val()
    $('#current-weather--container').html('<h3>Today in ' + userZipcode + '</h3>');
  });
  userZipcode = $("#account-container").find("[name=zipcode]").val()
  $('#current-weather--container').html('<h3>Today in ' + userZipcode + '</h3>');
}

function makeBaseLink(keyString){
  baseURL = "https://api.worldweatheronline.com/premium/v1/weather.ashx?key="+ keyString
};


function makeQueryLink(zipcode, format, daysNum){
  queryURL = baseURL+"&q="+zipcode+"&format="+format+"&num_of_days="+daysNum
  return queryURL
};

function askTheWeather(method, link, payload){
  $.ajax ({
    method: method || 'get',
    // data: payload || {},
    url: link,
    success: function(data){
      getTodayInfo(data.data);
      checkForRain(data.data.weather[0].hourly);
      checkForSnow(data.data.weather[0].hourly);
      getLowForToday(data.data.weather[0]);
      getRec();
    }
  });
}

var userInfoAPI = userInfoAPI || {};

function getLowForToday(weather){
  var temp = weather.mintempF;
  lowTemp = parseInt(temp);
};

function getTodayInfo(object){
  var today = object.weather[0].hourly
  var morning = today[2]
  var midday = today[4]
  var evening = today[5]
  var current = object.current_condition[0];
  renderTodayInfo(morning,$("#morning-forecast"), "morning")
  renderTodayInfo(midday,$("#midday-forecast"), "midday")
  renderTodayInfo(evening,$("#evening-forecast"), "evening")
  renderCurrentInfo(current)

};

function checkForRain(hourly){
  for (var i = 0; i<hourly.length; i ++){
    if ( hourly[i].chanceofrain > 40) {
      console.log(hourly[i].chanceofrain + "is greater than 40")
      willRain = true;
    }
  }
}

function checkForSnow(hourly){
  for (var i = 0; i<hourly.length; i ++){
    if ( hourly[i].chanceofsnow > 10) {
      console.log(hourly[i].chanceofsnow + "is greater than 10")
      willSnow = true;
    }
  }
}

function renderTodayInfo(object, parentElement, time){
  parentElement.empty();
  if (time == "morning"){
    var dayTime = $("<h4>").text("MORNING");
  }
  else if (time == "midday"){
    var dayTime = $("<h4>").text("MIDDAY");
  }
  else if (time == "evening"){
    var dayTime = $("<h4>").text("EVENING");
  }
  var tempP = $("<p>").text("Temp: "+ object.tempF + " °F");
//  var humidityP = $("<p>").text("Humidity: "+ object.humidity + "%");
//  var feelsLikeP = $("<p>").text("Feels Like: "+ object.FeelsLikeF + " °F");
  var weatherIcon = $('<img>').attr('src', object.weatherIconUrl[0].value);
//  var weatherDesc = $('<p>').text("Weather description: " + object.weatherDesc[0].value);
  parentElement.append(dayTime, tempP, weatherIcon);
  // ask Sam why this works lol
};

function renderCurrentInfo(object){
  $("#current-weather-container").empty();
  console.log(userZipcode);
  var todayIn = $("<h3>").text("TODAY IN "+ userZipcode);
  var currentCondition = $("<p>").text("Temp: "+ object.temp_F + " °F  |  Humidity: "+ object.humidity + "%  |  Feels Like: "+ object.FeelsLikeF + " °F"  );
  var humidityP = $("<p>").text("Humidity: "+ object.humidity + "%");
  var feelsLikeP = $("<p>").text("Feels Like: "+ object.FeelsLikeF + " °F");
//  var weatherIcon = $('<img>').attr('src', object.weatherIconUrl[0].value);
  $("#current-weather-container").append(todayIn, currentCondition);
  // ask Sam why this works lol
};


$(function(){
  getKey();

})
