import mongoose from "mongoose";
const Schema = mongoose.Schema;

    const questionOneSchema = new Schema ({
        answerD: {
            type: Boolean,
            required: true,
            default: false
        },
        answerR: {
            type: Boolean,
            required: true,
            default: false
        },
    });

const QuestionOne = mongoose.model("QuestionOne", questionOneSchema)
export default QuestionOne;