function switchDisplay(DOMelement){
  DOMelement.toggleClass('hidden');
  DOMelement.toggleClass('displayed');
};

function switchClickHandler(clickElement,DOMelement,secondDOMelement,thirdDOMelement){
  clickElement.on('click', function(){
    switchDisplay(DOMelement);
    if(secondDOMelement){
      switchDisplay(secondDOMelement);
    };
    if(thirdDOMelement){
      switchDisplay(thirdDOMelement);
    };
  });
};

function findCurrent(){
  $.ajax({
    url: "api/users/currentuser",
    method: "GET",
    success: function(data){
      console.log(data.username);
    }
  });
};
