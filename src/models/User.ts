import { Schema, model, Document, Model } from 'mongoose';
import findOrCreate from 'mongoose-findorcreate'; // need this for passport/login

export interface IUser extends Document {
    // TBD
};

export interface IUserModel extends Model<IUser> {
    findOrCreate(param: {
        openId: string;
        firstName: string;
        lastName: string,
        email: string,
        picture: string
    }): Promise<IUser>;
    findOrCreate(param: {
        openId: string;
        firstName: string;
        lastName: string,
        email: string,
        picture: string
    },
    cb: (err: any, user: IUser) => void): void
};

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

userSchema.plugin(findOrCreate);

const User: IUserModel = model<IUser, IUserModel>('User', userSchema);

export default User;
