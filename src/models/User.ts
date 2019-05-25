import { Schema, model, Document, Model } from 'mongoose';
import findOrCreate from 'mongoose-findorcreate'; // need this for passport/login

export interface IUser extends Document {
    findOrCreate(param: {
        openId: string;
        firstName: string;
        lastName: string,
        email: string,
    }): Promise<any>;
    findOrCreate(param: {
        openId: string;
        firstName: string;
        lastName: string,
        email: string,
    },
    cb: (err: any, user: any) => void): void
}

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
        type : Schema.Types.ObjectId,
        ref: 'frenemies',
    }],
});

userSchema.plugin(findOrCreate); // why is this not working

const User: Model<IUser> = model<IUser>('User', userSchema);

export default User;
