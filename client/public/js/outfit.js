function getRec(){
  getGender();
  getPref();
  console.log("actual temp: " + currentTemp);
  console.log("rain: " + willRain);
  console.log("snow: " + willSnow);
  console.log("gender: " + userGender);
  console.log("temp w preference: " + currentTempPref);
  $.ajax({
    url: '/api/recommendations?degrees=' + currentTempPref +'&rain=' + willRain + '&snow='+ willSnow + '&gender=' + userGender,
    type: 'GET',
    success: function(recommendation){
      renderOutfit(recommendation);
    }
  })
}


function renderOutfit(object){
  $("#outfit-container").empty();
  var image = object.rec[0].outfit;
  var name = object.rec[0].name;
  console.log("Today's Recommendation: " + name);
  newDiv = $("<div>")
  newImg = $("<img src=" + image + ">");
  newImg.addClass("img-rec");
  $("#outfit-container").append(newDiv, newImg)
  newDiv.text(object.text);
};

// this should be on submit not on page load?
$(function(){
//  getRec();
})
