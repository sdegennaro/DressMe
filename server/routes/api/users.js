var express             = require('express'),
    usersRouter         = express.Router(),
    passport            = require('../../lib/passportStrategy.js'),
    User                = require('../../models/user.js');


    // Create a new user
usersRouter.post('/', function(req, res, next) {

  User.create(req.body.user, function( err, dbUser ) {
  console.log(err);
  if (err) { res.status(500).end() }
  res.json( dbUser );
  });
});

// blocks non logged in
usersRouter.use(passport.authenticate('jwt', { session: false}));

    // GET all users
usersRouter.get('/', function(req, res, next) {

  User.find(function( err, dbUsers ){
    res.json( dbUsers );
    });

});

var util = require("util");
usersRouter.get('/user', function(req, res, next) {
  var username = req.query.username;
  // console.log("the body is: " + util.inspect(req.body));
  User.findOne({username: username}, function( err, dbUser ){
    res.json( dbUser );
  });

});

usersRouter.get('/currentuser', function(req, res, next) {
  res.json( req.user );
});

// usersRouter.get('/:id',function(req, res, next){
//   User.find(function(err, dbUsers){
//     res.json(dbUsers);
//   })
// })

usersRouter.put('/:id', function(req, res, next) {
  console.log('updating!');
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body , { new: true }, function(err, user) {
    res.json(user);
  });
});

usersRouter.delete('/:id/remove', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  User.findByIdAndRemove(id, function(err) {
    if (err) {
      res.status(500).end();
    }else {
      res.status(204).end();
    }
  })
});

module.exports = usersRouter;
