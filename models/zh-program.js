var mongoose = require("mongoose");

// ProgramSchema - title, date, category, content
var zhprogramSchema = new mongoose.Schema({
    title: String,
    date: Date,
    category: String,
    body: String
});

var zhProgram = mongoose.model("zhProgram", zhprogramSchema);
module.exports = zhProgram;