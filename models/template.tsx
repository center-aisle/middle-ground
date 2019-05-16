//import Mongoose from "mongoose"; problems with using const on this page and another one. maybe change to let for a solution?
//const mongoose = require("mongoose") 
const Schema = mongoose.Schema;

const userSchema = new Schema ({
//img: string;
//other user database imputs
});

const User = mongoose.model("User", userSchema);

//module.exports = 