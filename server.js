// set up ======================================================================
var express  = require('express');
var app      = express();
var path = require('path');
var mongoose = require('mongoose');// mongoose for mongodb
var port  	 = process.env.PORT || 8080;// set the port
var database = require('./config/database');// load the database config
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var flash    = require('express-flash-notification')
var cookieParser = require('cookie-parser');
var session      = require('express-session');

// configuration ===============================================================
mongoose.connect(database.url); // connect to mongoDB database on modulus.io

app.set('view engine', 'ejs'); // set up ejs for templating
app.engine('.html', require('ejs').renderFile);
app.use(express.static(__dirname + '/frontend'));
app.set('views', __dirname + '/frontend');


//Authentication
app.use(cookieParser()); // read cookies (needed for auth)
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use( session( { secret: 'thisismyApp',
                    cookie: { maxAge: 60000 },
                    rolling: true,
                    resave: true, 
                    saveUninitialized: false
                  }
         )
);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
app.use(flash()); // use connect-flash for flash messages stored in session
 
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
require('./config/passport')(passport); // pass passport for configuration
 
app.listen(port);
console.log("App is fired on: " + port);
