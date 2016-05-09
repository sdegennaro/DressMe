function renderOutfit(){
  $.ajax({
    // Getting an error for url, not sure why this isnt found
    url: '/api/recommendations/',
    type: 'GET',
    success: function(recommendations){
      console.log("got recommendation!");
      var $display = $('#outfit-container');
      $display.empty();
      // returning all recs because logic isnt built in yet
      var recArray = recommendations.recommendation;
      console.log(recArray[1]);
      for (var i =0; i < recArray.length; i++){
        var outfitImage = recArray[i].url;
        console.log(outfitImage);
        $display.append("<img src=" + outfitImage + "/>");
      }
    }
  })
}


$(function(){
  renderOutfit();
})
