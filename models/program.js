var mongoose = require("mongoose");

// ProgramSchema - title, date, category, content
var programSchema = new mongoose.Schema({
    title: String,
    date: Date,
    category: String,
    body: String
});

var Program = mongoose.model("Program", programSchema);
module.exports = Program;