var mongoose = require("mongoose");

// nonProgramSchema - category, content
var zhnonprogramSchema = new mongoose.Schema({
    category: String,
    body: String
});

module.exports = mongoose.model("zhnonProgram", zhnonprogramSchema);