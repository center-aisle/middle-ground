import mongoose from "mongoose";
const Schema = mongoose.Schema;

const personalScoreSchema = new Schema ({
    outdoors: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Outdoor"
    }],
    home: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Home"
    }],
    sports: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Sport"
    }],
    music: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Music"
    }]
});

const PersonalScore = mongoose.model("personalScore", personalScoreSchema)
export default PersonalScore;