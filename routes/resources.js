var express = require("express");
var router = express.Router();
var nonProgram = require("../models/nonprogram");
var zhnonProgram = require("../models/zh-nonprogram");

 
// var zhnewnonProgram = {category:"低碳数据库", body:"低碳数据库页面"};
// // Create a new program and save to DB
// zhnonProgram.create(zhnewnonProgram, function(err, newlyCreated){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(newlyCreated);      
//     }
// });

// var zhnewnonProgram = {category:"专家数据库", body:"专家数据库页面"};
// // Create a new program and save to DB
// zhnonProgram.create(zhnewnonProgram, function(err, newlyCreated){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(newlyCreated);      
//     }
// });

// var zhnewnonProgram = {category:"国际视角", body:"国际视角页面"};
// // Create a new program and save to DB
// zhnonProgram.create(zhnewnonProgram, function(err, newlyCreated){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(newlyCreated);      
//     }
// });

//=============================English Routes================================//

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
        res.redirect("/login");
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
        res.redirect("/login");
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
        res.redirect("/login");
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
        res.redirect("/login");
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
        res.redirect("/login");
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
        res.redirect("/login");
    }
});


//==================================中文routes==================================//

// SHOW 显示低碳数据库页面
router.get("/zh/lowcarbon", function(req, res) {
    zhnonProgram.findOne({category:"低碳数据库"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("resources/zh-lowcarbon", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT 低碳数据库页面
router.get("/zh/lowcarbon/edit", function(req, res) {
    if(req.isAuthenticated()){
        zhnonProgram.findOne( {category:"低碳数据库"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/zh/lowcarbon");
            } else {
                res.render("resources/zh-editlowcarbon", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.redirect("/login");
    }
});

// UPDATE 低碳数据库页面
router.put("/zh/lowcarbon", function(req,res){
    if(req.isAuthenticated()){
        zhnonProgram.findOneAndUpdate({category:"低碳数据库"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/zh/lowcarbon");
            } else {
                res.redirect("/zh/lowcarbon");
            }
        });    
    } else {
        res.redirect("/login");
    }
});

// SHOW 显示专家数据库
router.get("/zh/expert", function(req, res) {
    zhnonProgram.findOne({category:"专家数据库"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("resources/zh-expert", {nonprogram:foundNonprogram});
        }
    });
});

// EDIT expert route
router.get("/zh/expert/edit", function(req, res) {
    if(req.isAuthenticated()){
        zhnonProgram.findOne( {category:"专家数据库"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/zh/expert");
            } else {
                res.render("resources/zh-editexpert", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.redirect("/login");
    }
});

// UPDATE expert route
router.put("/zh/expert", function(req,res){
    if(req.isAuthenticated()){
        zhnonProgram.findOneAndUpdate({category:"专家数据库"}, req.body.nonprogram, function(err, updatedProgram){
            if(err){
                res.redirect("/zh/expert");
            } else {
                res.redirect("/zh/expert");
            }
        });    
    } else {
        res.redirect("/login");
    }
});

// SHOW show details of research
router.get("/zh/research", function(req, res) {
    zhnonProgram.findOne({category:"国际视角"}, function(err, foundNonprogram){
        if(err){
            console.log(err);
        } else {
            res.render("resources/zh-research", {nonprogram:foundNonprogram});
        }
    });
});


// EDIT research
router.get("/zh/research/edit", function(req, res) {
    if(req.isAuthenticated()){
        zhnonProgram.findOne( {category:"国际视角"}, function(err, foundNonprogram){
            if(err){
                res.redirect("/zh/research");
            } else {
                res.render("resources/zh-editresearch", {nonprogram: foundNonprogram});
            }
        });
    } else {
        res.redirect("/login");
    }
});

// UPDATE research route
router.put("/zh/research", function(req,res){
    if(req.isAuthenticated()){
        zhnonProgram.findOneAndUpdate({category:"国际视角"}, req.body.nonprogram,function(err, updatedProgram){
            if(err){
                res.redirect("/zh/research");
            } else {
                res.redirect("/zh/research");
            }
        });    
    } else {
        res.redirect("/login");
    }
});


//============ MIDDLEWARE ============//
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;