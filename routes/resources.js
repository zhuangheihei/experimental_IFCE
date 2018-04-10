var express = require("express");
var router = express.Router();
var Program = require("../models/program");

router.get("/lowcarbon", function(req, res) {
    res.render("resources/lowcarbon");
});


router.get("/expert", function(req, res) {
    res.render("resources/expert");
});


router.get("/research", function(req, res) {
    res.render("resources/research");
});


// MIDDLEWARE
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;