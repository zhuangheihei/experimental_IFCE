var express = require("express");
var app = express();
var bodyParser = require("body-parser");


// tell express to use these settings and tools
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


// ------------英文版页面的逻辑由此开始-------------//

app.get("/", function(req, res){
    res.render("index");
});

// 移到这里以备存储测试，等待被移动到database
var programs = [
        {title: "air pollution air pollution air pollution", date:"1023-1-12", body:"hello"},   
        {title: "air pollution air pollution air pollution", date:"1024-1-12", body:"hello"},   
        {title: "air pollution air pollution air pollution", date:"1035-1-56", body:"hello"},   
        {title: "air pollution air pollution air pollution", date:"1067-3-13", body:"hello"}   
];

// 显示的program只是链接，也就是文字
app.get("/programs", function(req, res){
    res.render("programs", {programs:programs});
});

app.post("/programs", function(req, res){
    //将data从form传输到database
    var title = req.body.title;
    var date = req.body.date;
    var body = req.body.body;
    var newProgram = {title: title, date: date, body:body};
    programs.push(newProgram);
    //redirect到programs页面然后显示新发布的东西
    res.redirect("/programs");
});

// 创建新的文章页面
app.get("/programs/new", function(req, res) {
    
    res.render("new");
});

// 各种页面的render
app.get("/programs/policyadvocacy", function(req, res) {
    res.render("policyadvocacy");
});

app.get("/programs/techexchanges", function(req, res) {
    res.render("techexchanges");
});


app.get("/programs/us-chdialogue", function(req, res) {
    res.render("us-chdialogue");
});


app.get("/programs/education", function(req, res) {
    res.render("education");
});


app.get("/programs/specialevents", function(req, res) {
    res.render("specialevents");
});


app.get("/programs/mediacoverage", function(req, res) {
    res.render("mediacoverage");
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



//-------------中文版页面的逻辑由此开始-------------//
app.get("/zh", function(req, res){
    res.render("zh-index");
});




// 表示这个东西跑起来了！
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The IFCE Server Has Started!");
});



