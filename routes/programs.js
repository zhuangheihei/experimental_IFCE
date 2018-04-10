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
            res.render("programs/programs", {programs:allPrograms});
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
            res.render("programs/policyadvocacy", {programs:allPrograms});
        }
    });
});

router.get("/techexchanges", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Technology Exchanges"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/techexchanges", {programs:allPrograms});
        }
    });
});


router.get("/us-chdialogue", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"US-China Dialogue"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/us-chdialogue", {programs:allPrograms});
        }
    });
});


router.get("/education", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Education and Capacity Building"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/education", {programs:allPrograms});
        }
    });
});


router.get("/specialevents", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Special Events"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/specialevents", {programs:allPrograms});
        }
    });
});


router.get("/mediacoverage", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Media Coverage"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/mediacoverage", {programs:allPrograms});
        }
    });
});


// NEW - show form to create new program
router.get("/programs/new", isLoggedIn, function(req, res) {
    res.render("programs/new");
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


// Show details of each program
// This route should behind any /programs/adf route
router.get("/programs/:id", function(req, res) {
    //find the program with provided ID
    Program.findById(req.params.id, function(err, foundProgram){
       if(err){
           console.log(err);
       } else{
            //render show template with that program
           res.render("programs/show", {program:foundProgram});
       }
    });
});


// EDIT the program
router.get("/programs/:id/edit", function(req, res) {
    if(req.isAuthenticated()){
        Program.findById(req.params.id, function(err, foundProgram){
            if(err){
                res.redirect("/programs");
            } else {
                res.render("programs/edit", {program: foundProgram});
            }
        });
    } else {
        res.send("You must log in to do that!");
    }
});

// UPDATE program route
router.put("/programs/:id", function(req,res){
    if(req.isAuthenticated()){
        Program.findByIdAndUpdate(req.params.id, req.body.program,function(err, updatedProgram){
            if(err){
                res.redirect("/programs");
            } else {
                res.redirect("/programs/"+ req.params.id);
            }
        });    
    } else {
        res.send("You don't have the permission to do that!");
    }
});


// DESTROY program route
router.delete("/programs/:id", function(req, res){
    if(req.isAuthenticated()){
        Program.findByIdAndRemove(req.params.id, function(err){
            if(err){
                res.redirect("/programs");
            } else {
                res.redirect("/programs");
            }
        });
    } else {
        res.send("You must log in to do that!");
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