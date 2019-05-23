import mongoose from "mongoose";
const Schema = mongoose.Schema;

const politicalScoreSchema = new Schema ({
    QuestionOne: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionTwo: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionThree: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionFour: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionFive: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionSix: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionSeven: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionEight: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionNine: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionTen: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionEleven: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionTwelve: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionThirteen: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionFourteen: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionFifteen: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionSixteen: [{
        type: Boolean,
        required: true,
        ref: "questionTwoSchema"
    }],
    QuestionSeventeen: [{
        type: String,
        required: true,
        ref: "questionThreeSchema"
    }]
});

const politicalScore = mongoose.model("politicalScore", politicalScoreSchema)
export default politicalScore;