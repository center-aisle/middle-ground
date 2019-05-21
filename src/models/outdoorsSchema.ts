import mongoose from "mongoose";
const Schema = mongoose.Schema;

    const outdoorsSchema = new Schema ({
        hiking: {
            type: Boolean,
            required: true,
            default: false
        },
        camping: {
            type: Boolean,
            required: true,
            default: false
        },
        rockclimbing: {
            type: Boolean,
            required: true,
            default: false
        },
        bouldering: {
            type: Boolean,
            required: true,
            default: false
        },        
        fishing: {
            type: Boolean,
            required: true,
            default: false
        },
        hunting: {
            type: Boolean,
            required: true,
            default: false
        },
        kayaking: {
            type: Boolean,
            required: true,
            default: false
        },
        paintballing: {
            type: Boolean,
            required: true,
            default: false
        },
        other: {
            type: Boolean,
            required: true,
            default: false
        }
    });

const Outdoors = mongoose.model("Outdoors", outdoorsSchema)
export default Outdoors;