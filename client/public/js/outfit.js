function getRec(){
  lowTemp = lowTemp;
  $.ajax({
    url: '/api/recommendations?degrees=' + lowTemp +'&rain=' + willRain + '&snow='+ willSnow + '&gender=' + gender,
    type: 'GET',
    success: function(recommendation){
      renderOutfit(recommendation);
      console.log("got recommendation!");
    }
  })
}


function renderOutfit(object){
  $("#outfit-container").empty();
  console.log(object);
  var image = object.rec[0].outfit;
  var name = object.rec[0].name;
  console.log("Today's Recommendation: " + name);
  newDiv = $("<div>")
  newImg = $("<img src=" + image + ">")
  $("#outfit-container").append(newDiv, newImg)
  newDiv.text(object.text);
};

// this should be on submit not on page load?
$(function(){
  getRec();
})
