<<<<<<< HEAD
function renderOutfit(){
  $.ajax({
    // Getting an error for url, not sure why this isnt found
    url: '/api/recommendations/',
    success: function(recommendations){
      console.log("got recommendation!");
      var $display = $('#outfit-container');
      $display.empty();
      // returning all recs because logic isnt built in yet
      var recArray = recommendations;
      for (var i =0; i < recArray.length; i++){
        var outfitImage = recArray[i].url;
        $display.append("<img src=" + outfitImage + "/>");
      }
=======
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
>>>>>>> 2ef227f0d28603a24589ea14aa30c7bc84837503
    }
  })
}

<<<<<<< HEAD

$(function(){
  renderOutfit();
=======
function renderOutfit(){
  var $display = $('#outfit-container');
  $display.empty();
  for (var i =0; i < recArray.length; i++){
    var outfitImage = recArray[i].url;
    console.log(outfitImage);

    $display.append("<img src=" + outfitImage + ">");
  }
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
>>>>>>> 2ef227f0d28603a24589ea14aa30c7bc84837503
})
