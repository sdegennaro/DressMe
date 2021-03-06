console.log('so......text me maybe?');

function sendText(message, toPhone){
  $.ajax({
    url: '/test',
    type: "POST",
    data: {
      message: message,
      to: toPhone,
    },
    success: function(data){
      console.log(data);
    }
  });
};

function textButtonHandler(){
  $("#text-test-button").on("click",function(){
    var number = ($("#text-test-input").val());
    $.ajax({
      method: 'get',
      url:"api/users/user",
      data: {
        username : number,
      },
      success: function(userData){
        $.ajax({
          method:"get",
          url: makeQueryLink(userData.zipcode,"JSON","1"),
          success: function(weatherData){
            var hourlyWeather = weatherData.data.weather[0].hourly;
            checkForRain(hourlyWeather);
            checkForSnow(hourlyWeather);
            var userGender = userData.gender;
            var tempNow = weatherData.data.current_condition[0].temp_F;
            console.log('/api/recommendations?degrees=' + tempNow +'&rain=' + willRain + '&snow='+ willSnow + '&gender=' + userGender);
            $.ajax({
              url: '/api/recommendations?degrees=' + tempNow +'&rain=' + willRain + '&snow='+ willSnow + '&gender=' + userGender,
              type: 'GET',
              success: function(recommendation){
                console.log(recommendation.rec[0].text);
                console.log(recommendation.rec[0]);
                sendText(recommendation.rec[0].text, userData.username);

              }
            })
          }
        })
      }
    })
  })
};

$(function(){
  textButtonHandler();
})
