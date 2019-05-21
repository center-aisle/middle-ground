import mongoose from "mongoose";
const Schema = mongoose.Schema;

const personalScoreSchema = new Schema ({
    outdoors: [{
        type: String,
        required: true,
        default: false
    }],
    home: [{
        type: String,
        required: true,
        default: false
    }],
    sports: [{
        type: String,
        required: true,
        default: false
    }],
    music: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "musicSchema"
    }]
});

const personalScore = mongoose.model("personalScore", personalScoreSchema)
export default personalScore;