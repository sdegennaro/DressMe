console.log('loaded...');

var auth = auth || {};

function landingCTAButtonHandler(){
    $("#landing-cta-button").on('click',function(){
      // hide landing page content
      $("#landing-container").toggleClass('displayed');
      $("#landing-container").toggleClass('hidden');

      $("#sign-up-form").toggleClass('displayed');
      $("#sign-up-form").toggleClass('hidden');
    });
};

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
  $("#login-form").toggleClass('displayed');
  $("#login-form").toggleClass('hidden');
  $("#logged-in-content").fadeIn(1000);
  auth.users.init();
};

auth.showAlert = function(msg){
  $("#alert-msg").text(msg).fadeIn(1000, function(){
    $(this).fadeOut(1000);
  })
};

auth.users = {
  init: function(){
      auth.users.getAll()
        .done(function(users){
          auth.users.renderUsers(users);
        })
        .fail( function(jqXHR){
            console.log(jqHXR);
        });
  },
  getAll: function(){
    return $.getJSON("/api/users");
  },
  renderUsers: function(users){
    var $container = $("#users-container");
    users.forEach( function(user){
      var $user = $("<li>");
      $user.html("Username: " + user.username + " <br/> Email: " + user.email );
      $container.append($user);
    });
  }

}

auth.bindSwitchFormLinks = function(){
  $("#login-link, #sign-up-link").on("click", function(e){
      $("#sign-up-form, #login-form" ).toggleClass('hidden');
      $("#sign-up-form, #login-form" ).toggleClass('displayed');

  });
};

auth.bindLogoutLink = function(){
  $("#log-out-link").on("click", function(e){
    Cookies.remove("jwt_token");
    auth.checkLoggedInStatus();
    $('#landing-container').toggleClass('hidden');
    $('#landing-container').toggleClass('displayed');
  } );
}

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
}


auth.setLoggedOutState = function() {
  // $('#logged-in-content').hide();
  $('#logged-in-content').toggleClass('hidden');
  $('#logged-in-content').toggleClass('displayed');



  $('.forms.container').fadeIn(1000);
}

auth.bindSignUpForm = function(){
  $('#sign-up-form').on('submit', function(e) {
    e.preventDefault();
    auth.submitSignUpForm();
  });
};

auth.submitSignUpForm = function(){
  var $form    = $('#sign-up-form');
  var username = $form.find('[name=username]').val();
  var password = $form.find('[name=password]').val();
  var confirm  = $form.find('[name=password_confirm]').val();
  var zipcode = $form.find("[name=zipcode]").val();
  var temp_pref = $form.find("[name=temp_pref]").val();
  var is_admin = $form.find("[name=is_admin]").val();
  var text_opt_in = $form.find("[name=text_opt_in]").val();

  if (confirm !== password) {
    return auth.showAlert("Passwords do not match!");
  }

  var payload = {
    user: {
      username: username,
      password: password,
      zipcode: zipcode,
      temp_pref: temp_pref,
      is_admin: is_admin,
      text_opt_in: text_opt_in

    }
  };

  $.post('/api/users', payload)
    .done(auth.signUpSuccess)
    .fail(auth.signUpFailure)
};

auth.signUpSuccess = function(data, status, jqXHR) {
  console.log(data, status, jqXHR);
  $("#sign-up-form").toggleClass('displayed');
  $("#sign-up-form").toggleClass('hidden');

  $("#login-form").toggleClass('displayed');
  $("#login-form").toggleClass('hidden');
  // should show a success alert
}

auth.signUpFailure = function(jqXHR) {
  auth.showAlert("There was an error. Try again!");
}

$(function(){
  auth.checkLoggedInStatus();
  auth.bindLoginForm();
  auth.bindSignUpForm();
  auth.bindSwitchFormLinks();
  auth.bindLogoutLink();
  landingCTAButtonHandler();
});
