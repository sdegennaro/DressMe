function getRec(){
  getGender();
  getPref();
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
