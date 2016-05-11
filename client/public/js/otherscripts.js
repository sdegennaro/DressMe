function switchDisplay(DOMelement){
  DOMelement.toggleClass('hidden');
  DOMelement.toggleClass('displayed');
};

function switchClickHandler(clickElement,DOMelement,secondDOMelement,thirdDOMelement){
  clickElement.on('click', function(){
    console.log('click')
    switchDisplay(DOMelement);
    if(secondDOMelement){
      switchDisplay(secondDOMelement);
    };
    if(thirdDOMelement){
      switchDisplay(thirdDOMelement);
    };

  });
};

function signUpFormFlow(){
  switchClickHandler()
}