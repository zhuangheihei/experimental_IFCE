var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user"),
    Program = require("./models/program");
    

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

// encode and decode user information 
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ===============英文版页面的逻辑由此开始===============//

app.get("/", function(req, res){
    res.render("index");
});

// INDEX Route - show all programs
app.get("/programs", function(req, res){
    // GET ALL PROGRAMS FROM DB
    Program.find({}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs", {programs:allPrograms});
        }
    });
});


// 各种页面的render
app.get("/programs/policyadvocacy", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Policy Advocacy"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("policyadvocacy", {programs:allPrograms});
        }
    });
});

app.get("/programs/techexchanges", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Technology Exchanges"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("techexchanges", {programs:allPrograms});
        }
    });
});


app.get("/programs/us-chdialogue", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"US-China Dialogue"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("us-chdialogue", {programs:allPrograms});
        }
    });
});


app.get("/programs/education", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Education and Capacity Building"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("education", {programs:allPrograms});
        }
    });
});


app.get("/programs/specialevents", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Special Events"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("specialevents", {programs:allPrograms});
        }
    });
});


app.get("/programs/mediacoverage", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Media Coverage"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("mediacoverage", {programs:allPrograms});
        }
    });
});


app.get("/lowcarbon", function(req, res) {
    res.render("lowcarbon");
});


app.get("/expert", function(req, res) {
    res.render("expert");
});


app.get("/research", function(req, res) {
    res.render("research");
});


app.get("/introduction", function(req, res) {
    res.render("introduction");
});


app.get("/staff", function(req, res) {
    res.render("staff");
});


app.get("/directors", function(req, res) {
    res.render("directors");
});

app.get("/partners", function(req, res) {
    res.render("partners");
});

app.get("/friends", function(req, res) {
    res.render("friends");
});

app.get("/committee", function(req, res) {
    res.render("committee");
});



// CREATE - add new program to DB
app.post("/programs", function(req, res){
    //将data从form传输到database
    var title = req.body.title;
    var date = req.body.date;
    var category = req.body.category;
    var body = req.body.body;
    var newProgram = {title: title, date: date, category: category, body:body};
    // Create a new program and save to DB
    Program.create(newProgram, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect到programs page
            res.redirect("/programs");      
        }
    })
});


// NEW - show form to create new program
app.get("/programs/new", function(req, res) {
    res.render("new");
});

// Show details of each program
// This route should behind any /programs/adf route
app.get("/programs/:id", function(req, res) {
    //find the program with provided ID
    Program.findById(req.params.id, function(err, foundProgram){
       if(err){
           console.log(err);
       } else{
            //render show template with that program
           res.render("show", {program:foundProgram});
       }
    });
});


// Admin page, you can manage all contents.
app.get("/admin", isLoggedIn, function(req, res) {
    res.render("admin");
});

// Login route
// render login form
app.get("/login", function(req, res) {
    if(req.isAuthenticated()){
        res.render("admin");
    } else{
        res.render("login");    
    }
});

// Login logic
// passport.authenticate 在这里被称为middleware, 因为它在第一个输入参数和最后一个callback function之间起作用。
// 它处在beginning of route 与 end of route(callback function)之间
app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/admin",
        failureRedirect: "/login"
    }), function(req, res){
});

// Logout logic
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/programs");
});


// 一次性注册route
// // Register page, you can sign up for new admin user
// app.get("/secretregister", function(req, res) {
//     res.render("register"); 
// });

// // Handling administrator signs up
// app.post("/secretregister", function(req, res){
//     req.body.username
//     req.body.password
//     // pass the user object that we want to create, and hash password with user name
//     User.register(new User({username:req.body.username}), req.body.password, function(err, user){
//         if(err){
//             console.log(err);
//             return res.render("register");
//         }
//         passport.authenticate("local")(req,res,function(){
//             res.redirect("/admin");
//         });
//     });
// });



// ===============中文版页面的逻辑由此开始===============//

app.get("/zh", function(req, res){
    res.render("zh-index");
});






// MIDDLEWARE
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


// 表示这个东西跑起来了！
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The IFCE Server Has Started!");
});



