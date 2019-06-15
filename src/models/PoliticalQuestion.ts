import { Schema, model, Document, Model } from 'mongoose';

const politicalQuestionSchema = new Schema({
    id: String,
    color: String,
    title: String,
    answerD: {
        type: String,
        required: true,
    },
    answerR: {
        type: String,
        required: true,
    },
    buttonLog: String,
});

const PoliticalQuestion = model('PoliticalQuestion', politicalQuestionSchema);

export default PoliticalQuestion;

// const politicalQuestionsSchema = new Schema ({     questionOne: {
// type: String,         required: true,         default: "answerD"     },
// questionTwo: {         type: String,         required: true,         default:
// "answerD"     },     questionThree: {         type: String,         required:
// true,         default: "answerD"     },     questionFour: {         type:
// String,         required: true,         default: "answerD"     },
// questionFive: {         type: String,         required: true,
// default: "answerD"     },     questionSix: {         type: String,
// required: true,         default: "answerD"     },     questionSeven: {
//  type: String,         required: true,         default: "answerD"     },
// questionEight: {         type: String,         required: true,
// default: "answerD"     },     questionNine: {         type: String,
// required: true,         default: "answerD"     },     questionTen: {
// type: String,         required: true,         default: "answerD"     },
// questionEleven: {         type: String,         required: true,
// default: "answerD"     },     QuestionTwelve: {         type: String,
// required: true,         default: "answerD"     },     questionThirteen: {
//     type: String,         required: true,         default: "answerD"     },
//   questionFourteen: {         type: String,         required: true,
// default: "answerD"     },     questionFifteen: {         type: String,
//  required: true,         default: "answerD"     },     questionSixteen: {
//     type: String,         required: true,         default: "answerD"     },
//   questionSeventeen:  {         type: String,         required: true,
// default: "answerI"     }, }); const politicalQuestions =
// mongoose.model("politicalQuestions", politicalQuestionsSchema) export default
// politicalQuestions;
