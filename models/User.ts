import { boolean } from "@oclif/parser/lib/flags";

//import Mongoose from "mongoose"; problems with using const on this page and another one. maybe change to let for a solution?
var mongoose = require("mongoose");

//Save a reference to the Schema constructor
const Schema = mongoose.Schema;

//Uses the Schema constructor, create a new UserSchema object
const userSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
    },
    bio: {
        type: String,
        trim: true
    },
    gender: {
        type: Boolean,
        required: "Gender is Required"
    },
    age: {
        type: Number,
        required: "Age is Required"
    }
//political score: number;
//personal: string;
//other user database imputs more specifically?
});

const User = mongoose.model("User", userSchema);

module.exports = User;