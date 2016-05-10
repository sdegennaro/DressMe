console.log('API is up');

var weatherKey;
var baseURL;
var queryURL;
var userZipcode;

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
    $('#current-weather-container').html('<h3>Today in ' + userZipcode + '</h3>');
  });
  userZipcode = $("#account-container").find("[name=zipcode]").val()
  $('#current-weather-container').html('<h3>Today in ' + userZipcode + '</h3>');
}

function makeBaseLink(keyString){
  baseURL = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key="+ keyString
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
    }
  });
}

var userInfoAPI = userInfoAPI || {};

function getTodayInfo(object){
  var today = object.weather[0].hourly
  var morning = today[2]
  var midday = today[4]
  var evening = today[5]
  renderTodayInfo(morning,$("#morning-forecast"))
  renderTodayInfo(midday,$("#midday-forecast"))
  renderTodayInfo(evening,$("#evening-forecast"))
  // renderTodayInfo(morningIcon,$('#morning-forecast'))
};

function renderTodayInfo(object, parentElement){

  var tempP = $("<p>").text("Temp: "+ object.tempF + " °F");
  var humidityP = $("<p>").text("Humidity: "+ object.humidity + "%");
  var feelsLikeP = $("<p>").text("Feels Like: "+ object.FeelsLikeF + " °F");
  var weatherIcon = $('<img>').attr('src', object.weatherIconUrl[0].value);
  var weatherDesc = $('<p>').text("Weather description: " + object.weatherDesc[0].value);
  parentElement.append(tempP,humidityP, feelsLikeP, weatherDesc, weatherIcon);
  console.log("Today's weather" + tempP);
  // ask Sam why this works lol
};

// function renderCurrentInfo(object){
//   var current = object.current_condition[0]
//   console.log(current.temp_F);
// };

// auth.renderUserInfo = function() {
//
//   How can I get info from the user from the mongo database?
//
//   var query = $('#input').val();
//   var key = '&key=3436ce55a40c41fc8ef154950160605';
//   var format = '&format=json';
//   $.getJSON('http://api.worldweatheronline.com/premium/v1/weather.ashx?q=' + query + format + key, function(data){
//
//   }
//
// };

//
// userInfoAPI.get = function() {
//   return makeAjaxCall('get', '/api/users');
// }
//
// // POST request to /
// userInfoAPI.post = function( user ) {
//   return makeAjaxCall('post','/api/users', puppy);
// }
//
// // PUT request to /:id
// userInfoAPI.update = function( userId, changes ) {
//   var url = '/api/users/' + userId;
//   return makeAjaxCall('put', url, changes);
// }
//
// // DELETE request to /:id
// userInfoAPI.remove = function( userId ) {
//   var url = '/api/users/' + userId;
//   return makeAjaxCall('delete', url);
// }

$(function(){
  getKey();

})
