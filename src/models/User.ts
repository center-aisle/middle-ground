import { Schema, model } from 'mongoose';
import findOrCreate from 'mongoose-findorcreate'; // need this for passport/login


// Uses the Schema constructor, create a new UserSchema object
const userSchema = new Schema({
    openId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    bio: {
        type: String,
        trim: true,
        required: true,
    },
    gender: {
        type: Boolean,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    politicalScore: [{
        type: Schema.Types.ObjectId,
        ref: 'politicalScore',
    }],
    personalScore: [{
        type: Schema.Types.ObjectId,
        ref: 'personalScore',
    }],
    frenemies: [{
        type :Schema.Types.ObjectId,
        ref: 'frenemies'
    }]
});

userSchema.plugin(findOrCreate); // why is this not working

const User = model('User', userSchema);

export default User;
