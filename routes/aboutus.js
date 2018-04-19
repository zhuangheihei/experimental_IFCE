var express = require("express");
var router = express.Router();
var nonProgram = require("../models/nonprogram");
var zhnonProgram = require("../models/zh-nonprogram");

// var category = "Introduction";
// var body = "This is Introduction";
// var newProgram = {category: category, body:body};
// // Create a new program and save to DB
// nonProgram.create(newProgram, function(err, newlyCreated){
//     if(err){
//         console.log(err);
//     } else {
//         //redirect到programs page
//         console.log(newlyCreated);   
//     }
// });


// SHOW show details
router.get("/introduction", function(req, res) {
    nonProgram.findOne({category:"Introduction"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/introduction", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Introduction
router.get("/introduction/edit", function(req, res) {
    if(req.isAuthenticated()){
        nonProgram.findOne( {category:"Introduction"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/introduction");
            } else {
                res.render("aboutus/editintroduction", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.send("You must log in to do that!");
    }
});

// UPDATE introduction route
router.put("/introduction", function(req,res){
    if(req.isAuthenticated()){
        nonProgram.findOneAndUpdate({category:"Introduction"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/introduction");
            } else {
                res.redirect("/introduction");
            }
        });    
    } else {
        res.send("You don't have the permission to do that!");
    }
});

// var category = "Staff";
// var body = "This is Staff";
// var newProgram = {category: category, body:body};
// // Create a new program and save to DB
// nonProgram.create(newProgram, function(err, newlyCreated){
//     if(err){
//         console.log(err);
//     } else {
//         //redirect到programs page
//         console.log(newlyCreated);   
//     }
// });

// SHOW show details 
router.get("/staff", function(req, res) {
    nonProgram.findOne({category:"Staff"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/staff", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Route
router.get("/staff/edit", function(req, res) {
    if(req.isAuthenticated()){
        nonProgram.findOne( {category:"Staff"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/staff");
            } else {
                res.render("aboutus/editstaff", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.send("You must log in to do that!");
    }
});

// UPDATE Route
router.put("/staff", function(req,res){
    if(req.isAuthenticated()){
        nonProgram.findOneAndUpdate({category:"Staff"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/staff");
            } else {
                res.redirect("/staff");
            }
        });    
    } else {
        res.send("You don't have the permission to do that!");
    }
});

// var category = "Directors";
// var body = "This is Directors";
// var newProgram = {category: category, body:body};
// // Create a new program and save to DB
// nonProgram.create(newProgram, function(err, newlyCreated){
//     if(err){
//         console.log(err);
//     } else {
//         //redirect到programs page
//         console.log(newlyCreated);   
//     }
// });

// SHOW show details 
router.get("/directors", function(req, res) {
    nonProgram.findOne({category:"Directors"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/directors", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Route
router.get("/directors/edit", function(req, res) {
    if(req.isAuthenticated()){
        nonProgram.findOne( {category:"Directors"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/directors");
            } else {
                res.render("aboutus/editdirectors", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.send("You must log in to do that!");
    }
});

// UPDATE Route
router.put("/directors", function(req,res){
    if(req.isAuthenticated()){
        nonProgram.findOneAndUpdate({category:"Directors"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/directors");
            } else {
                res.redirect("/directors");
            }
        });    
    } else {
        res.send("You don't have the permission to do that!");
    }
});

// var category = "Partners";
// var body = "This is Partners";
// var newProgram = {category: category, body:body};
// // Create a new program and save to DB
// nonProgram.create(newProgram, function(err, newlyCreated){
//     if(err){
//         console.log(err);
//     } else {
//         //redirect到programs page
//         console.log(newlyCreated);   
//     }
// });

// SHOW show details 
router.get("/partners", function(req, res) {
    nonProgram.findOne({category:"Partners"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/partners", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Route
router.get("/partners/edit", function(req, res) {
    if(req.isAuthenticated()){
        nonProgram.findOne( {category:"Partners"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/partners");
            } else {
                res.render("aboutus/editpartners", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.send("You must log in to do that!");
    }
});

// UPDATE Route
router.put("/partners", function(req,res){
    if(req.isAuthenticated()){
        nonProgram.findOneAndUpdate({category:"Partners"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/partners");
            } else {
                res.redirect("/partners");
            }
        });    
    } else {
        res.send("You don't have the permission to do that!");
    }
});

// var category = "Friends";
// var body = "This is Friends";
// var newProgram = {category: category, body:body};
// // Create a new program and save to DB
// nonProgram.create(newProgram, function(err, newlyCreated){
//     if(err){
//         console.log(err);
//     } else {
//         //redirect到programs page
//         console.log(newlyCreated);   
//     }
// });

// SHOW show details 
router.get("/friends", function(req, res) {
    nonProgram.findOne({category:"Friends"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/friends", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Route
router.get("/friends/edit", function(req, res) {
    if(req.isAuthenticated()){
        nonProgram.findOne( {category:"Friends"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/friends");
            } else {
                res.render("aboutus/editfriends", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.send("You must log in to do that!");
    }
});

// UPDATE Route
router.put("/friends", function(req,res){
    if(req.isAuthenticated()){
        nonProgram.findOneAndUpdate({category:"Friends"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/friends");
            } else {
                res.redirect("/friends");
            }
        });    
    } else {
        res.send("You don't have the permission to do that!");
    }
});

// var category = "Committee";
// var body = "This is Committee";
// var newProgram = {category: category, body:body};
// // Create a new program and save to DB
// nonProgram.create(newProgram, function(err, newlyCreated){
//     if(err){
//         console.log(err);
//     } else {
//         //redirect到programs page
//         console.log(newlyCreated);   
//     }
// });


// SHOW show details 
router.get("/committee", function(req, res) {
    nonProgram.findOne({category:"Committee"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/committee", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Route
router.get("/committee/edit", function(req, res) {
    if(req.isAuthenticated()){
        nonProgram.findOne( {category:"Committee"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/committee");
            } else {
                res.render("aboutus/editcommittee", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.send("You must log in to do that!");
    }
});

// UPDATE Route
router.put("/committee", function(req,res){
    if(req.isAuthenticated()){
        nonProgram.findOneAndUpdate({category:"Committee"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/committee");
            } else {
                res.redirect("/committee");
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