//import Mongoose from "mongoose"; problems with using const on this page and another one. maybe change to let for a solution?
var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
//name: string;
//bio: string;
//gender: boolean;
//age: number;
//political score: number;
//personal: string;
//img: string;
//other user database imputs more specifically?
});

const User = mongoose.model("User", userSchema);

//module.exports = 