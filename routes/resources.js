var express = require("express");
var router = express.Router();
var nonProgram = require("../models/nonprogram");

// SHOW show details of lowcarbon page
router.get("/lowcarbon", function(req, res) {
    nonProgram.findOne({category:"Low Carbon Database"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("resources/lowcarbon", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Low Carbon Database
router.get("/lowcarbon/edit", function(req, res) {
    if(req.isAuthenticated()){
        nonProgram.findOne( {category:"Low Carbon Database"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/lowcarbon");
            } else {
                res.render("resources/editlowcarbon", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.send("You must log in to do that!");
    }
});

// UPDATE lowcarbon route
router.put("/lowcarbon", function(req,res){
    if(req.isAuthenticated()){
        nonProgram.findOneAndUpdate({category:"Low Carbon Database"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/lowcarbon");
            } else {
                res.redirect("/lowcarbon");
            }
        });    
    } else {
        res.send("You don't have the permission to do that!");
    }
});

// SHOW show details of expert page
router.get("/expert", function(req, res) {
    nonProgram.findOne({category:"Expert Database"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("resources/expert", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT expert route
router.get("/expert/edit", function(req, res) {
    if(req.isAuthenticated()){
        nonProgram.findOne( {category:"Expert Database"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/expert");
            } else {
                res.render("resources/editexpert", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.send("You must log in to do that!");
    }
});

// UPDATE expert route
router.put("/expert", function(req,res){
    if(req.isAuthenticated()){
        nonProgram.findOneAndUpdate({category:"Expert Database"}, req.body.nonprogram, function(err, updatedProgram){
            if(err){
                res.redirect("/expert");
            } else {
                res.redirect("/expert");
            }
        });    
    } else {
        res.send("You don't have the permission to do that!");
    }
});

// SHOW show details of research
router.get("/research", function(req, res) {
    nonProgram.findOne({category:"Research"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("resources/research", {nonprogram:foundNonprogram});
        }
    });
});


// EDIT research
router.get("/research/edit", function(req, res) {
    if(req.isAuthenticated()){
        nonProgram.findOne( {category:"Research"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/research");
            } else {
                res.render("resources/editresearch", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.send("You must log in to do that!");
    }
});

// UPDATE research route
router.put("/research", function(req,res){
    if(req.isAuthenticated()){
        nonProgram.findOneAndUpdate({category:"Research"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/research");
            } else {
                res.redirect("/research");
            }
        });    
    } else {
        res.send("You don't have the permission to do that!");
    }
});


// MIDDLEWARE
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;