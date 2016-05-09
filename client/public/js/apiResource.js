console.log('API is up');

var userInfoAPI = userInfoAPI || {};

var makeAjaxCall = function (method, url, payload) {
  return $.ajax ({
    method: method || 'get',
    data: payload || {},
    url: url
  });
};

userInfoAPI.get = function() {
  return makeAjaxCall('get', '/api/users');
}

// POST request to /
userInfoAPI.post = function( user ) {
  return makeAjaxCall('post','/api/users', puppy);
}

// PUT request to /:id
userInfoAPI.update = function( userId, changes ) {
  var url = '/api/users/' + userId;
  return makeAjaxCall('put', url, changes);
}

// DELETE request to /:id
userInfoAPI.remove = function( userId ) {
  var url = '/api/users/' + userId;
  return makeAjaxCall('delete', url);
}
