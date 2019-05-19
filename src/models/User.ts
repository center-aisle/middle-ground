import { Schema, model } from "mongoose";
import findOrCreate from "mongoose-findorcreate"; // need this for passport/login

//Save a reference to the Schema constructor
// const Schema = mongoose.Schema;

//Uses the Schema constructor, create a new UserSchema object
const userSchema = new Schema({
    openId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    bio: {
        type: String,
        trim: true,
        required: false
    },
    gender: {
        type: Boolean,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
//political score: number;
//personal: string;
//other user database imputs more specifically? ---->> see allUsersArray file in algorithm_drafts
});

userSchema.plugin(findOrCreate); // why is this not working

const User = model("User", userSchema);

export default User;