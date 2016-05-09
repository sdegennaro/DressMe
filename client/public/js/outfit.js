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
    }
  })
}


$(function(){
  renderOutfit();
})
