console.log('so......text me maybe?');

function sendText(message, toPhone){
  $.ajax({
    url: '/test',
    type: "POST",
    data: {
      message: message,
      to: toPhone,
    },
    success: function(data){
      console.log(data);
    }
  });
};

function textButtonHandler(){
  $("#text-test-button").on("click",function(){
    console.log($("#text-test-input").val());
  })
};

$(function(){
  textButtonHandler();
})
