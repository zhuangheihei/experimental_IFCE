var express = require("express");
var router = express.Router();
var Program = require("../models/program");

// INDEX Route - show all programs
router.get("/programs", function(req, res){
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
router.get("/policyadvocacy", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Policy Advocacy"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("policyadvocacy", {programs:allPrograms});
        }
    });
});

router.get("/techexchanges", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Technology Exchanges"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("techexchanges", {programs:allPrograms});
        }
    });
});


router.get("/us-chdialogue", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"US-China Dialogue"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("us-chdialogue", {programs:allPrograms});
        }
    });
});


router.get("/education", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Education and Capacity Building"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("education", {programs:allPrograms});
        }
    });
});


router.get("/specialevents", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Special Events"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("specialevents", {programs:allPrograms});
        }
    });
});


router.get("/mediacoverage", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Media Coverage"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("mediacoverage", {programs:allPrograms});
        }
    });
});


router.get("/lowcarbon", function(req, res) {
    res.render("lowcarbon");
});


router.get("/expert", function(req, res) {
    res.render("expert");
});


router.get("/research", function(req, res) {
    res.render("research");
});


router.get("/introduction", function(req, res) {
    res.render("introduction");
});


router.get("/staff", function(req, res) {
    res.render("staff");
});


router.get("/directors", function(req, res) {
    res.render("directors");
});

router.get("/partners", function(req, res) {
    res.render("partners");
});

router.get("/friends", function(req, res) {
    res.render("friends");
});

router.get("/committee", function(req, res) {
    res.render("committee");
});



// CREATE - add new program to DB
router.post("/programs", function(req, res){
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


// MIDDLEWARE
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;