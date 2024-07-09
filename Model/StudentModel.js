const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    course: String,
    status: String
})

module.exports = mongoose.model("students", StudentSchema)