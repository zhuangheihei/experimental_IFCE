var express = require("express");
var router = express.Router();
var nonProgram = require("../models/nonprogram");
var zhnonProgram = require("../models/zh-nonprogram");


// ================ routes begins ======================//

var category = "Introduction";
var body = "This is Introduction";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
nonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});


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
        res.redirect("/login");
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
        res.redirect("/login");    }
});

var category = "IFCE简介";
var body = "简介页面";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
zhnonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});


// SHOW show details
router.get("/zh/introduction", function(req, res) {
    zhnonProgram.findOne({category:"IFCE简介"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/zh-introduction", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Introduction
router.get("/zh/introduction/edit", function(req, res) {
    if(req.isAuthenticated()){
        zhnonProgram.findOne( {category:"IFCE简介"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/zh/introduction");
            } else {
                res.render("aboutus/zh-editintroduction", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.redirect("/login");
    }
});

// UPDATE introduction route
router.put("/zh/introduction", function(req,res){
    if(req.isAuthenticated()){
        zhnonProgram.findOneAndUpdate({category:"IFCE简介"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/zh/introduction");
            } else {
                res.redirect("/zh/introduction");
            }
        });    
    } else {
        res.redirect("/login");
    }
});



var category = "Staff";
var body = "This is Staff";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
nonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});

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
        res.redirect("/login");
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
        res.redirect("/login");
    }
});


var category = "工作人员及办事处";
var body = "工作人员及办事处页面";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
zhnonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});

// SHOW show details 
router.get("/zh/staff", function(req, res) {
    zhnonProgram.findOne({category:"工作人员及办事处"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/zh-staff", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Route
router.get("/zh/staff/edit", function(req, res) {
    if(req.isAuthenticated()){
        zhnonProgram.findOne( {category:"工作人员及办事处"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/zh/staff");
            } else {
                res.render("aboutus/zh-editstaff", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.redirect("/login");
    }
});

// UPDATE Route
router.put("/zh/staff", function(req,res){
    if(req.isAuthenticated()){
        zhnonProgram.findOneAndUpdate({category:"工作人员及办事处"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/zh/staff");
            } else {
                res.redirect("/zh/staff");
            }
        });    
    } else {
        res.redirect("/login");
    }
});

var category = "Directors";
var body = "This is Directors";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
nonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});

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
        res.redirect("/login");
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
        res.redirect("/login");
    }
});


var category = "理事会理事";
var body = "理事会理事页面";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
zhnonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});

// SHOW show details 
router.get("/zh/directors", function(req, res) {
    zhnonProgram.findOne({category:"理事会理事"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/zh-directors", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Route
router.get("/zh/directors/edit", function(req, res) {
    if(req.isAuthenticated()){
        zhnonProgram.findOne( {category:"理事会理事"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/zh/directors");
            } else {
                res.render("aboutus/zh-editdirectors", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.redirect("/login");
    }
});

// UPDATE Route
router.put("/zh/directors", function(req,res){
    if(req.isAuthenticated()){
        zhnonProgram.findOneAndUpdate({category:"理事会理事"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/zh/directors");
            } else {
                res.redirect("/zh/directors");
            }
        });    
    } else {
        res.redirect("/login");
    }
});



var category = "Partners";
var body = "This is Partners";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
nonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});

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
        res.redirect("/login");
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
        res.redirect("/login");
    }
});


var category = "主要合作伙伴";
var body = "主要合作伙伴页面";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
zhnonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});

// SHOW show details 
router.get("/zh/partners", function(req, res) {
    zhnonProgram.findOne({category:"主要合作伙伴"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/zh-partners", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Route
router.get("/zh/partners/edit", function(req, res) {
    if(req.isAuthenticated()){
        zhnonProgram.findOne( {category:"主要合作伙伴"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/zh/partners");
            } else {
                res.render("aboutus/zh-editpartners", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.redirect("/login");
    }
});

// UPDATE Route
router.put("/zh/partners", function(req,res){
    if(req.isAuthenticated()){
        zhnonProgram.findOneAndUpdate({category:"主要合作伙伴"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/zh/partners");
            } else {
                res.redirect("/zh/partners");
            }
        });    
    } else {
        res.redirect("/login");
    }
});


var category = "Friends";
var body = "This is Friends";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
nonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});

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
        res.redirect("/login");
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
        res.redirect("/login");
    }
});

var category = "国际中国环境基金会大事记";
var body = "国际中国环境基金会大事记";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
zhnonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});

// SHOW show details 
router.get("/zh/friends", function(req, res) {
    zhnonProgram.findOne({category:"国际中国环境基金会大事记"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/zh-friends", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Route
router.get("/zh/friends/edit", function(req, res) {
    if(req.isAuthenticated()){
        zhnonProgram.findOne( {category:"国际中国环境基金会大事记"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/zh/friends");
            } else {
                res.render("aboutus/zh-editfriends", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.redirect("/login");
    }
});

// UPDATE Route
router.put("/zh/friends", function(req,res){
    if(req.isAuthenticated()){
        zhnonProgram.findOneAndUpdate({category:"国际中国环境基金会大事记"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/zh/friends");
            } else {
                res.redirect("/zh/friends");
            }
        });    
    } else {
        res.redirect("/login");
    }
});


var category = "Committee";
var body = "This is Committee";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
nonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});


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
        res.redirect("/login");
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
        res.redirect("/login");
    }
});


var category = "顾问委员会";
var body = "顾问委员会页面";
var newProgram = {category: category, body:body};
// Create a new program and save to DB
zhnonProgram.create(newProgram, function(err, newlyCreated){
    if(err){
        console.log(err);
    } else {
        //redirect到programs page
        console.log(newlyCreated);   
    }
});


// SHOW show details 
router.get("/zh/committee", function(req, res) {
    zhnonProgram.findOne({category:"顾问委员会"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("aboutus/zh-committee", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT Route
router.get("/zh/committee/edit", function(req, res) {
    if(req.isAuthenticated()){
        zhnonProgram.findOne( {category:"顾问委员会"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/zh/committee");
            } else {
                res.render("aboutus/zh-editcommittee", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.redirect("/login");
    }
});

// UPDATE Route
router.put("/zh/committee", function(req,res){
    if(req.isAuthenticated()){
        zhnonProgram.findOneAndUpdate({category:"顾问委员会"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/zh/committee");
            } else {
                res.redirect("/zh/committee");
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