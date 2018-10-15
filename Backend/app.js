//Declare and initialize express
var express = require("express");
var app = express();

//Declare and use body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

const cors = require('cors');

//Declare Mongoose
console.log(process.env.DATABASE);
var mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost/moe");
var url = process.env.DATABASE || "mongodb://localhost/moe"
mongoose.connect(url);


//Declare Moment
app.locals.moment = require('moment');

//Declare passport
var passport = require("passport");
var LocalStrategy = require("passport-local");

//Declare Method Override
var methodOverride = require("method-override");


app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"));
//Seeds the database
//seedDB();
app.use(cors());

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.get('/', function (req, res) {

});

app.listen(3000, function() {
  console.log('Server running on port 3000');
});


    