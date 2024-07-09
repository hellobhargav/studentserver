require("./db")
const express = require("express");
const app = express();
const students = require("./Model/StudentModel")
const cors = require("cors");
app.use(cors())

app.use(express.json())

app.post("/student", async (req, res) => {
    const student = new students(req.body)
    const result = await student.save();
    res.send(result)
})

app.get("/student", async (req, res) => {
    const result = await students.find()
    res.send(result)
})


//Delete
app.delete("/student/:_id", async (req, res) => {
    const _id = req.params._id;
    const result = await students.deleteOne({ _id: _id })
    res.send(result)
})

//Read One
app.get("/student/:_id", async (req, res) => {
    const query = { _id: req.params._id }
    const result = await students.findOne(query)
    res.send(result)
})

//Update

app.put("/student/:_id", async (req, res) => {
    const query = { _id: req.params._id };
    const data = req.body;
    const newValue = { $set: data };
    const result = await students.updateOne(query, newValue)
    res.send(result)
})

//search
app.get("/search/:key", async (req, res) => {
    const key = req.params.key;
    const result = await students.find({
        "$or": [
            { name: { $regex: key } },
            { mobile: { $regex: key } },
            { email: { $regex: key } },
            { course: { $regex: key } },
            { status: { $regex: key } }
        ]
    })

    res.send(result)
})

app.listen(4000, () => console.log("Server Started"))