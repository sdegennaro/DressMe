var express = require("express");
var authRouter = express.Router();

var passport  = require("../../lib/passportStrategy");
var jwt       = require("jsonwebtoken");
var jwtConfig = require("../../config/jwt.js");

var User = require("../../models/user");

authRouter.use( passport.initialize() );

authRouter.post("/", passport.authenticate('local', { session: false}), function( req, res, next ){
    var token = jwt.sign( req.user, jwtConfig.secret, {
      expiresIn: 18000
    });

    res.json({ token: token });
});

module.exports = authRouter;
