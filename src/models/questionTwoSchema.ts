import mongoose from "mongoose";
const Schema = mongoose.Schema;

    const questionTwoSchema = new Schema ({
        answerD: {
            type: Boolean,
            required: true,
            default: false
        },
        answerR: {
            type: Boolean,
            required: true,
            default: false
        }
    });

const QuestionTwo = mongoose.model("QuestionTwo", questionTwoSchema)
export default QuestionTwo;