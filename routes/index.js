var express = require("express");
var router = express.Router();
var Program = require("../models/program");
var User = require("../models/user");
var passport = require("passport");
// ===============英文版页面的逻辑由此开始===============//

router.get("/", function(req, res){
    res.render("index");
});


// NEW - show form to create new program
router.get("/programs/new", isLoggedIn, function(req, res) {
    res.render("new");
});

// Show details of each program
// This route should behind any /programs/adf route
router.get("/programs/:id", function(req, res) {
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
router.get("/admin", isLoggedIn, function(req, res) {
    res.render("admin");
});

// Login route
// render login form
router.get("/login", function(req, res) {
    if(req.isAuthenticated()){
        res.render("admin");
    } else{
        res.render("login");    
    }
});

// Login logic
// passport.authenticate 在这里被称为middleware, 因为它在第一个输入参数和最后一个callback function之间起作用。
// 它处在beginning of route 与 end of route(callback function)之间
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/admin",
        failureRedirect: "/login"
    }), function(req, res){
});

// Logout logic
router.get("/logout", function(req, res) {
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

router.get("/zh", function(req, res){
    res.render("zh-index");
});

// MIDDLEWARE
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;