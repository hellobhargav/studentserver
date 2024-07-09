const mongoose = require("mongoose")
const dburl = "mongodb+srv://bhargavwd:iTPMxNonSejpyElV@mern9am.gfjwjcn.mongodb.net/?retryWrites=true&w=majority&appName=mern9am";

mongoose.connect(dburl)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log("not connected to db", err))