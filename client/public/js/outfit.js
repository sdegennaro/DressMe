var recArray
function getrecArray(){
  $.ajax({
    // Getting an error for url, not sure why this isnt found
    url: '/api/recommendations/',
    type: 'GET',
    success: function(recommendations){
      console.log("got recommendation!");
      // returning all recs because logic isnt built in yet
      recArray = recommendations.recommendation;
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

function renderType(object){
  newDiv = $("<div>")
  newImg = $("<img src=" + object.url + ">")
  $("#rec-container").append(newDiv, newImg)
  newDiv.text(object.text);
};


$(function(){
  getrecArray();
})
