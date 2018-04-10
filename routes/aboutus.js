var express = require("express");
var router = express.Router();
var Program = require("../models/program");



router.get("/introduction", function(req, res) {
    res.render("aboutus/introduction");
});


router.get("/staff", function(req, res) {
    res.render("aboutus/staff");
});


router.get("/directors", function(req, res) {
    res.render("aboutus/directors");
});

router.get("/partners", function(req, res) {
    res.render("aboutus/partners");
});

router.get("/friends", function(req, res) {
    res.render("aboutus/friends");
});

router.get("/committee", function(req, res) {
    res.render("aboutus/committee");
});


// MIDDLEWARE
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;