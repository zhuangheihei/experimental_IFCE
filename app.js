var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    Program = require("./models/program"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/experiment");

// tell express to use these settings and tools
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");



// ------------英文版页面的逻辑由此开始-------------//

app.get("/", function(req, res){
    res.render("index");
});

// INDEX Route - show all programs
app.get("/programs", function(req, res){
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
app.get("/programs/policyadvocacy", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Policy Advocacy"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("policyadvocacy", {programs:allPrograms});
        }
    });
});

app.get("/programs/techexchanges", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Technology Exchanges"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("techexchanges", {programs:allPrograms});
        }
    });
});


app.get("/programs/us-chdialogue", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"US-China Dialogue"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("us-chdialogue", {programs:allPrograms});
        }
    });
});


app.get("/programs/education", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Education and Capacity Building"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("education", {programs:allPrograms});
        }
    });
});


app.get("/programs/specialevents", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Special Events"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("specialevents", {programs:allPrograms});
        }
    });
});


app.get("/programs/mediacoverage", function(req, res) {
    // GET ALL PROGRAMS FROM DB
    Program.find({category:"Media Coverage"}, function(err, allPrograms){
        if(err){
            console.log(err);
        } else {
            res.render("mediacoverage", {programs:allPrograms});
        }
    });
});


app.get("/lowcarbon", function(req, res) {
    res.render("lowcarbon");
});


app.get("/expert", function(req, res) {
    res.render("expert");
});


app.get("/research", function(req, res) {
    res.render("research");
});


app.get("/introduction", function(req, res) {
    res.render("introduction");
});


app.get("/staff", function(req, res) {
    res.render("staff");
});


app.get("/directors", function(req, res) {
    res.render("directors");
});

app.get("/partners", function(req, res) {
    res.render("partners");
});

app.get("/friends", function(req, res) {
    res.render("friends");
});

app.get("/committee", function(req, res) {
    res.render("committee");
});

// CREATE - add new program to DB
app.post("/programs", function(req, res){
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




// NEW - show form to create new program
app.get("/programs/new", function(req, res) {
    res.render("new");
});

// Show details of each program
// This route should behind any /programs/adf route
app.get("/programs/:id", function(req, res) {
    //find the program with provided ID
    Program.findById(req.params.id, function(err, foundProgram){
       if(err){
           console.log(err);
       } else{
            //render show template with that program
           res.render("show", {program:foundProgram});
       }
    });
})

// Admin page, you can manage all contents.


//-------------中文版页面的逻辑由此开始-------------//
app.get("/zh", function(req, res){
    res.render("zh-index");
});




// 表示这个东西跑起来了！
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The IFCE Server Has Started!");
});



