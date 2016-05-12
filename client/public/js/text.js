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
      success: function(data){
        $.ajax({
          method:"get",
          url: makeQueryLink(data.zipcode,"JSON","1"),
          success: function(data){
            checkForRain(data.data.weather[0]);
            checkForSnow(data.data.weather[0]);

            console.log(willRain);
            $.ajax({
              url: '/api/recommendations?degrees=' + lowTemp +'&rain=' + willRain + '&snow='+ willSnow + '&gender=' + userGender,
              type: 'GET',
              success: function(recommendation){
                console.log(recommendation);
                console.log(recommendation.text);
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
