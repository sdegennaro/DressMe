console.log('API is up');

var weatherKey;
var baseURL;
var queryURL;
var userZipcode;
var currentTemp = 0;
var currentTempPref = 0
var willRain = false;
var willSnow = false;
var tempPref;
var userGender;

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

function getGender(){
  $('#update-button').click(function(){
    userGender = $("input[name=gender]:checked").val()
  });
  userGender = $("input[name=gender]:checked").val();
  userGender = userGender.toLowerCase();
}

function getPref(){
  $('#update-button').click(function(){
    tempPref= $("input[name=temp_pref]:checked").val()
  });
  tempPref = $("input[name=temp_pref]:checked").val();
  tempPref = tempPref.toLowerCase();
  if (tempPref == "hot"){
    currentTempPref = currentTemp - 3;
  }
  else if (tempPref == "ok"){
    currentTempPref = currentTemp;
  }
  else if (tempPref == "cold"){
    currentTempPref = currentTemp + 3;
  }
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
      getCurrentTemp(data.data.current_condition[0]);
      getGender()
      getRec();
    }
  });
}

var userInfoAPI = userInfoAPI || {};

function getCurrentTemp(weather){
  console.log("current temp");
  console.log(weather);
  var temp = weather.temp_F;
  currentTemp = parseInt(temp);
};

function getTodayInfo(object){
  var today = object.weather[0].hourly
  var morning = today[2]
  var midday = today[4]
  var evening = today[5]
  renderTodayInfo(morning,$("#morning-forecast"), "morning")
  renderTodayInfo(midday,$("#midday-forecast"), "midday")
  renderTodayInfo(evening,$("#evening-forecast"), "evening")
  renderCurrentInfo(object)

};

function checkForRain(hourly){
  if ( hourly[2].chanceofrain > 20 || hourly[4].chanceofrain > 20 || hourly[5].chanceofrain > 20 )  {
    console.log("Chance of rain is greater than 20");
    console.log(hourly);
    willRain = true;
  }
}

function checkForSnow(hourly){
  if ( hourly[2].chanceofsnow > 10 || hourly[4].chanceofsnow > 10 || hourly[5].chanceofsnow > 10 )  {
    console.log("Chance of snow is greater than 10");
    willSnow = true;
  }
}

function renderTodayInfo(object, parentElement, time){
  parentElement.empty();
  if (time == "morning"){
    var dayTime = $("<h4>").text("Morning");
  }
  else if (time == "midday"){
    var dayTime = $("<h4>").text("Midday");
  }
  else if (time == "evening"){
    var dayTime = $("<h4>").text("Evening");
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
  var current = object.current_condition[0];
  var todayIn = $("<p>").text("Today in "+ userZipcode);
  var currentTemp = $("<div id=temp>").text(current.temp_F + " °F ");
  var currentCondition = $("<p>").text( " Humidity: "+ current.humidity + "%  //  Feels Like: "+ current.FeelsLikeF + " °F"  );
  var minMax = $("<p>").text("Min Temp: "+ object.weather[0].mintempF + " °F  //  Max Temp: "+ object.weather[0].maxtempF + " °F" );
  $("#current-weather-container").append(todayIn, currentTemp, currentCondition, minMax);
  // ask Sam why this works lol
};


$(function(){
  getKey();

})
