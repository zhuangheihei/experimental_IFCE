var express = require("express");
var router = express.Router();
var Program = require("../models/program");
var zhProgram = require("../models/zh-program.js")

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
    });
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
        res.redirect("/login");
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
        res.redirect("/login");
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
        res.redirect("/login");
    }
});

//================================中文界面的功能================================//

// INDEX Route - show all programs
router.get("/zh/programs", function(req, res){
    // GET ALL PROGRAMS FROM DB
    zhProgram.find({}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/zh-programs", {programs:allPrograms});
        }
    });
});


// 各种页面的render
router.get("/zh/policyadvocacy", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    zhProgram.find({category:"政策咨询与建议"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/zh-policyadvocacy", {programs:allPrograms});
        }
    });
});

router.get("/zh/techexchanges", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    zhProgram.find({category:"技术交流"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/zh-techexchanges", {programs:allPrograms});
        }
    });
});


router.get("/zh/us-chdialogue", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    zhProgram.find({category:"中美交流"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/zh-us-chdialogue", {programs:allPrograms});
        }
    });
});


router.get("/zh/education", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    zhProgram.find({category:"教育与培训"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/zh-education", {programs:allPrograms});
        }
    });
});


router.get("/zh/specialevents", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    zhProgram.find({category:"会议活动与特别事件"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/zh-specialevents", {programs:allPrograms});
        }
    });
});


router.get("/zh/mediacoverage", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    zhProgram.find({category:"媒体报道"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("programs/zh-mediacoverage", {programs:allPrograms});
        }
    });
});


// NEW - 显示新建项目页面
router.get("/zh/programs/new", isLoggedIn, function(req, res) {
    res.render("programs/zh-new");
});



// CREATE - 将新项目加入database
router.post("/zh/programs", function(req, res){
    //将data从form传输到database
    var title = req.body.title;
    var date = req.body.date;
    var category = req.body.category;
    var body = req.body.body;
    var zhnewProgram = {title: title, date: date, category: category, body:body};
    // Create a new program and save to DB
    zhProgram.create(zhnewProgram, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect到programs page
            res.redirect("/zh/programs");      
        }
    });
});


// Show details of each program
// This route should behind any /programs/adf route
router.get("/zh/programs/:id", function(req, res) {
    //find the program with provided ID
    zhProgram.findById(req.params.id, function(err, foundProgram){
       if(err){
           console.log(err);
       } else{
            //render show template with that program
           res.render("programs/zh-show", {program:foundProgram});
       }
    });
});


// EDIT the program
router.get("/zh/programs/:id/edit", function(req, res) {
    if(req.isAuthenticated()){
        zhProgram.findById(req.params.id, function(err, foundProgram){
            if(err){
                res.redirect("/zh/programs");
            } else {
                res.render("programs/zh-edit", {program: foundProgram});
            }
        });
    } else {
        res.redirect("/login");
    }
});

// UPDATE program route
router.put("/zh/programs/:id", function(req,res){
    if(req.isAuthenticated()){
        zhProgram.findByIdAndUpdate(req.params.id, req.body.program,function(err, updatedProgram){
            if(err){
                res.redirect("/zh/programs");
            } else {
                res.redirect("/zh/programs/"+ req.params.id);
            }
        });    
    } else {
        res.redirect("/login");
    }
});


// DESTROY program route
router.delete("/zh/programs/:id", function(req, res){
    if(req.isAuthenticated()){
        zhProgram.findByIdAndRemove(req.params.id, function(err){
            if(err){
                res.redirect("/zh/programs");
            } else {
                res.redirect("/zh/programs");
            }
        });
    } else {
        res.redirect("/login");
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