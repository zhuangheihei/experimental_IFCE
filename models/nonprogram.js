var mongoose = require("mongoose");

// nonProgramSchema - category, content
var nonprogramSchema = new mongoose.Schema({
    category: String,
    body: String
});

module.exports = mongoose.model("nonProgram", nonprogramSchema);