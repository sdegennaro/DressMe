function getRec(){
  lowTemp = lowTemp + 1;
  $.ajax({
    // Getting an error for url, not sure why this isnt found

    url: '/api/recommendations?degrees=' + lowTemp +'&rain=' + willRain + '&snow='+ willSnow + '&gender=' + gender,
    type: 'GET',
    success: function(recommendation){
      renderOutfit(recommendation);
      console.log("got recommendation!");

      // returning all recs because logic isnt built in yet
//      recArray = recommendations.recommendation;
    }
  })
}


function getType(tempNum, descriptionText){
  for (var i = 0; i < recArray.length; i++) {
    if(recArray[i].maxTemp >= tempNum && recArray[i].minTemp <= tempNum && recArray[i].description == descriptionText){
      renderType(recArray[i]);
      return;
    };
  };
};

function renderOutfit(object){
  $("#rec-container").empty();
  var image = object.rec[0].outfit;
  console.log(image);
  newDiv = $("<div>")
  newImg = $("<img src=" + image + ">")
  $("#rec-container").append(newDiv, newImg)
  newDiv.text(object.text);
};

// this should be on submit not on page load?
$(function(){
  getRec();
})
