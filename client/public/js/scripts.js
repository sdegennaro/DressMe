console.log('loaded...');

var auth = auth || {};

auth.bindLoginForm = function(){
  $("#login-form").on("submit", function(e){
    e.preventDefault();
    auth.submitLoginForm();
  });
};

auth.submitLoginForm = function(){
  var $form = $("#login-form");
  var username = $form.find("[name=username]").val();
  var password = $form.find("[name=password]").val();

  var payload = {
    username: username,
    password: password,
  };

  $.post('/api/auth', payload)
    .done(auth.loginSuccess)
    .fail(auth.loginFailure);

};

auth.loginSuccess = function( data, status, jqXHR){
  Cookies.set("jwt_token", data.token);
  auth.setLoggedInState();
};

auth.loginFailure = function(jqXHR){
  if( jqXHR == 401 ){
    auth.showAlert("Invalid Credentials");
  }
};

auth.setLoggedInState = function(){
  switchDisplay($("#login-form"));
  switchDisplay($("#logged-in-container"))
  auth.users.init();
};


auth.showAlert = function(msg){
  $("#alert-msg").text(msg).fadeIn(1000, function(){
    $(this).fadeOut(1000);
  })
};

auth.showAlerts = function(msg){
  $(".alert-msg").text(msg).fadeIn(1000, function(){
    $(this).fadeOut(1000);
  })
};

auth.users = {
  init: function(){
      auth.users.getAll()
        .done(function(users){
          $.ajax({
            url: "api/users/currentuser",
            method: "GET",
            success: function(data){
              renderAccountInfo(data);
            }
          })
        })
        .fail( function(jqXHR){
            console.log(jqHXR);
        });
  },
  getAll: function(){
    return $.getJSON("/api/users");
  }
};

function renderAccountInfo(userObject){

  $("#account-container").find("[name=username]").val(userObject.username);
  $("#account-container").find("[name=zipcode]").val(userObject.zipcode);
  $("#account-container").find("[name=temp_pref]").prop('checked', false);
  $("#account-container").find("[name=gender]").prop('checked', false);
  $("#account-container").find("[name=temp_pref][value="+userObject.temp_pref+"]").prop('checked', true);
  $("#account-container").find("[name=gender][value="+userObject.gender+"]").prop('checked', true);
  $("#account-container").find("[name=text_opt_in]").val(userObject.text_opt_in);
  getUserZipcode();
  getGender();
  makeQueryLink(userZipcode,"json",2);
  askTheWeather("GET", queryURL);

};

auth.bindSwitchFormLinks = function(){
  $("#login-link, #sign-up-link").on("click", function(e){
    switchDisplay($("#sign-up-form"));
    switchDisplay($("#login-form"));
    switchDisplay($("#signup-step-1"));

  });
  // $('#landing-login-link').on('click', function(){
  //   switchDisplay($('#landing-container'));
  //   switchDisplay($('#login-form'));
  // })
};

auth.bindLogoutLink = function(){
  $("#log-out-link").on("click", function(e){
    Cookies.remove("jwt_token");
    auth.checkLoggedInStatus();

    $('#morning-forecast').find('p').remove();
    $('#morning-forecast').find('img').remove();
    $("#midday-forecast").find('p').remove();
    $("#midday-forecast").find('img').remove();
    $("#evening-forecast").find('p').remove();
    $("#evening-forecast").find('img').remove();
    $('#rec-container').find('img').remove();

  });
};

auth.checkLoggedInStatus= function(){
  var token = auth.getToken();
  if(token){
    auth.setLoggedInState();
  } else {
    auth.setLoggedOutState();
  }
};

auth.getToken = function(){
  return Cookies.get("jwt_token");
};

auth.setLoggedOutState = function() {

  switchDisplay($('#logged-in-container'));
  switchDisplay($('#landing-container'));
  if($("#content-container").hasClass('hidden')){
    switchDisplay($('#content-container'));
    switchDisplay($('#account-container'));
  };
  $("#login-form").find('[name=username]').val("");
  $("#login-form").find('[name=password]').val("");
};

auth.bindSignUpForm = function(){

  $('#sign-up-form').on('submit', function(e) {
    e.preventDefault();
    auth.submitSignUpForm();
  });

  $('#button1').on('click', function(){
    var $form    = $('#sign-up-form');
    var zipcode  = $form.find("[name=zipcode]").val();
    if(zipcode.length !== 5) {
      zipcode.text(auth.showAlert("Invaild Zipcode"));
    };
  });

  $('#button2').on('click', function(){
    var $form    = $('#sign-up-form');
    var username = $form.find('[name=username]').val();
    var password = $form.find('[name=password]').val();
    var confirm  = $form.find('[name=password_confirm]').val();
    if (confirm !== password) {
      return auth.showAlert("Passwords do not match!");
    };
    if (username.length !== 10) {
      return auth.showAlert("Username isn't 10 characters");
    };
  });
};


auth.submitSignUpForm = function(){
  var $form    = $('#sign-up-form');
  var username = $form.find('[name=username]').val();
  var password = $form.find('[name=password]').val();
  var confirm  = $form.find('[name=password_confirm]').val();
  var zipcode = $form.find("[name=zipcode]").val();
  var gender = $form.find("[name=gender]:checked").val();
  var temp_pref = $form.find("[name=temp_pref]:checked").val();
  var text_opt_in = $form.find("[name=text_opt_in]:checked").val();

  if (confirm !== password) {
    return auth.showAlert("Passwords do not match!");
  }

  if (username.length !== 10) {
    return auth.showAlert("Username isn't 10 characters");
  }


  if(+zipcode == NaN) {
    return auth.showAlert("Zipcode is invaild");
  }

  var payload = {
    user: {
      username: username,
      password: password,
      zipcode: zipcode,
      temp_pref: temp_pref,
      text_opt_in: text_opt_in,
      gender: gender
    }
  };

  console.log(payload);

  $.post('/api/users', payload)
    .done(auth.signUpSuccess)
    .fail(auth.signUpFailure)
};

auth.signUpSuccess = function(data, status, jqXHR) {
  switchDisplay($("#sign-up-form"));
  switchDisplay($("#login-form"));
  // should show a success alert
}

auth.signUpFailure = function(jqXHR) {
  auth.showAlert("There was an error. Try again!");
}


function deleteHandler(){
  $("#delete-button").on("click", function(e){
    e.preventDefault();
    var username = $("#account-container").find("[name=username]").val();
    var id
    auth.users.getAll()
      .done(function(users){
        for (var i = 0; i < users.length; i++) {
          if(users[i].username == username){
            id = users[i]._id;
            $.ajax({
              url:'/api/users/'+id+"/remove",
              type: 'DELETE',
              success: function(){
                console.log('done!');
              }
            })
          }
        }
        Cookies.remove("jwt_token");
        auth.checkLoggedInStatus();
      })
  })
};

function updateHandler(){
  $("#update-button").on("click", function(e){
    e.preventDefault();
    var username = $("#account-container").find("[name=username]").val();
    var zipcode = $("#account-container").find("[name=zipcode]").val();
    var temp_pref = $("#account-container").find("[name=temp_pref]:checked").val();
    var text_opt_in = $("#account-container").find("[name=text_opt_in]:checked").val();
    var gender = $("#account-container").find("[name=gender]:checked").val();
    var gender = gender.toLowerCase();
    var $form   = $('#account-form');
    var zipcode = $form.find("[name=zipcode]").val();
    var username = $form.find('[name=username]').val();

      if(zipcode.length !== 5) {
        return auth.showAlerts("Invaild Zipcode");
      }

      if(username.length !== 10) {
        return auth.showAlerts("Invaild Phone Number");
      }


    auth.users.getAll()
      .done(function(users){
        for (var i = 0; i < users.length; i++) {
          if(users[i].username == username){
            id = users[i]._id;
            $.ajax({
              url:'/api/users/'+id,
              type: 'PUT',
              data: {
                username: username,
                zipcode: zipcode,
                temp_pref: temp_pref,
                gender: gender,
                text_opt_in: text_opt_in
              },
              success: function(data){
                $('#morning-forecast').find('p').remove();
                $('#morning-forecast').find('img').remove();
                $("#midday-forecast").find('p').remove();
                $("#midday-forecast").find('img').remove();
                $("#evening-forecast").find('p').remove();
                $("#evening-forecast").find('img').remove();
                $('#rec-container').find('img').remove();
                makeQueryLink(userZipcode,"json",2);
                askTheWeather("GET", queryURL);
              }
            })
          }
        }
      })
      switchDisplay($('#content-container'));
      switchDisplay($('#account-container'));
  })
}


function accountLinkHandler(){
  var accountLink = $("#account-link");
  var updateButton = $('#update-button');
  accountLink.on('click',function(){
    if(accountLink.text() === "My Account") {
      accountLink.text("My Forecast")
    }
    else {
      accountLink.text("My Account")
    };
  });
  updateButton.on('click', function(){
    if(accountLink.text() === 'My Forecast') {
      accountLink.text('My Account')
    }
  });
};

function setSignupStep1Button(){
  if(zipcode.length !== 5) {
    return auth.showAlert("Zipcode isn't 5 characters");
  }

}

function newLoginHandler(){
  $("#landing-login-link").on('click', function(){
    console.log('yo');
  })
};

$(function(){
  var landingCTAbutton = $("#landing-cta-button");
  var landingContainer = $("#landing-container");
  var signupForm = $("#sign-up-form");
  var landingLoginLink = $("#landing-login-link");
  var loginForm = $("#login-form");
  var accountLink = $('#account-link');
  var accountContainer = $('#account-container');
  var contentContainer = $("#content-container")
  var signupStep1 = $("#signup-step-1");
  var signupStep2 = $("#signup-step-2");
  var signupButton1 = signupForm.find("[name=button-1]")
  var signupButton2 = signupForm.find("[name=button-2]")
  // auth.checkLoggedInStatus();
  auth.bindLoginForm();
  auth.bindSignUpForm();
  auth.bindSwitchFormLinks();
  auth.bindLogoutLink();
  switchClickHandler(landingCTAbutton, landingContainer, signupForm, signupStep1);
  switchClickHandler(signupButton1, signupStep1, signupStep2);
  switchClickHandler(signupButton2, signupStep2);
  switchClickHandler(landingLoginLink, landingContainer, loginForm);
  switchClickHandler(accountLink, contentContainer, accountContainer);
  accountLinkHandler();
  deleteHandler();
  updateHandler();

});
