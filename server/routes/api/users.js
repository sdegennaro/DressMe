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

usersRouter.use(passport.authenticate('jwt', { session: false}));

    // GET all users
usersRouter.get('/', function(req, res, next) {

  User.find(function( err, dbUsers ){
    res.json( dbUsers );
    });
});

usersRouter.get('/:id',function(req, res, next){
  User.find(function(err, dbUsers){
    res.json(dbUsers);
  })
})

// router.put('/:id', function(req, res, next) {
//   console.log('updating!');
//   var id = req.params.id;
//   Puppy.findByIdAndUpdate(id, req.body.puppy , { new: true }, function(err, puppy) {
//     res.json(puppy);
//   });
// });

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
