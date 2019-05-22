import mongoose from "mongoose";
const Schema = mongoose.Schema;

const politicalScoreSchema = new Schema ({
    QuestionOne: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionTwo: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionThree: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionFour: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionFive: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionSix: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionSeven: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionEight: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionNine: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionTen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionEleven: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionTwelve: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionThirteen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionFourteen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionFifteen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionSixteen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionSeventeen: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "questionThreeSchema"
    }]
});

const politicalScore = mongoose.model("politicalScore", politicalScoreSchema)
export default politicalScore;