var dotEnv          = require('dotenv').config(),
    express         = require('express'),
    morgan          = require('morgan'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    app             = express(),
    // path            = require('path'),
    // indexRouter     = require('./server/routes/index.js'),
    // apiAuthRouter   = require('./server/routes/api/auth.js'),
    // apiUsersRouter  = require('./server/routes/api/users.js'),
    ejs             = require("ejs");


    // connect to db
    // process.env.MONGOLAB_URI is needed for when we deploy to Heroku
mongoose.connect( process.env.MONGOLAB_URI || "mongodb://localhost/dressme_app" );
app.use(morgan('dev'));
app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// This is how we read the cookies sent over from the browser
app.use(cookieParser());

// Set static file root folder
app.use(express.static('client/public'));

var indexRouter = require('./server/routes/index.js');
app.use(app.use('/', indexRouter));


var port = process.env.PORT || 3000;
app.listen( port, function() {
  console.log("sunny skies on 3000");
});
