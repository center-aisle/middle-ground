import mongoose from "mongoose";
const Schema = mongoose.Schema;

    const questionThreeSchema = new Schema ({
        answerD: {
            type: String,
            required: true,
            default: false
        },
        answerR: {
            type: String,
            required: true,
            default: false
        },
        answerI: {
            type: String,
            required: true,
            default: true
        }
    });

const QuestionThree = mongoose.model("QuestionThree", questionThreeSchema)
export default QuestionThree;