var express             = require('express'),
    usersRouter         = express.Router(),
    passport            = require('../../lib/passportStrategy.js'),
    User                = require('../../models/user.js');




module.exports = usersRouter;
