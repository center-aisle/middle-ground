import mongoose from "mongoose";
const Schema = mongoose.Schema;

const politicalScoreSchema = new Schema ({
    QuestionOne: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionOneSchema"
    }],
    QuestionTwo: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "homeSchema"
    }],
    QuestionThree: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "sportSchema"
    }],
    QuestionFour: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "musicSchema"
    }],
    QuestionFive: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "outdoorsSchema"
    }],
    QuestionSix: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "homeSchema"
    }],
    QuestionSeven: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "sportSchema"
    }],
    QuestionEight: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "outdoorsSchema"
    }],
    QuestionNine: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "homeSchema"
    }],
    QuestionTen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "sportSchema"
    }],
    QuestionEleven: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "outdoorsSchema"
    }],
    QuestionTwelve: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "homeSchema"
    }],
    QuestionThirteen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "sportSchema"
    }],
    QuestionFourteen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "outdoorsSchema"
    }],
    QuestionFifteen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "homeSchema"
    }],
    QuestionSixteen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "sportSchema"
    }],
    QuestionSeventeen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "outdoorsSchema"
    }]
});

const politicalScore = mongoose.model("politicalScore", politicalScoreSchema)
export default politicalScore;