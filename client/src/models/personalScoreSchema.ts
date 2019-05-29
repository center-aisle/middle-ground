import mongoose from "mongoose";
const Schema = mongoose.Schema;

const personalScoreSchema = new Schema ({
    outdoors: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "outdoorsSchema"
    }],
    home: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "homeSchema"
    }],
    sports: [{
        type: Schema.Types.ObjectId,
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