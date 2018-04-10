var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    methodOverride = require("method-override"),
    User = require("./models/user"),
    Program = require("./models/program");
    
var programRoute = require("./routes/programs"),
    aboutusRoute = require("./routes/aboutus"),
    resourcesRoute = require("./routes/resources"),
    indexRoute   = require("./routes/index");

mongoose.connect("mongodb://localhost/experiment");

app.use(require("express-session")({
    secret:"This is going to be the admin page of IFCE website!",
    resave: false,
    saveUninitialized: false
}));

// tell express to use these settings and tools
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));


// encode and decode user information 
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(indexRoute);
app.use(programRoute);
app.use(resourcesRoute);
app.use(aboutusRoute);

// 表示这个东西跑起来了！
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The IFCE Server Has Started!");
});



