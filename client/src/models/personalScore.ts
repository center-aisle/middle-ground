import mongoose from "mongoose";
const Schema = mongoose.Schema;

const personalScoreSchema = new Schema ({
    outdoors: [{
        type: String,
        required: true,
        ref: "outdoorsSchema"
    }],
    home: [{
        type: String,
        required: true,
        ref: "homeSchema"
    }],
    sports: [{
        type: String,
        required: true,
        ref: "sportSchema"
    }],
    music: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "musicSchema"
    }]
});

const personalScore = mongoose.model("personalScore", personalScoreSchema)
export default personalScore;