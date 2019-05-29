import mongoose from "mongoose";
const Schema = mongoose.Schema;

    const sportSchema = new Schema ({
        football: {
            type: Boolean,
            required: true,
            default: false
        },
        basketball: {
            type: Boolean,
            required: true,
            default: false
        },
        soccer: {
            type: Boolean,
            required: true,
            default: false
        },
        hockey: {
            type: Boolean,
            required: true,
            default: false
        },        
        running: {
            type: Boolean,
            required: true,
            default: false
        },
        swimming: {
            type: Boolean,
            required: true,
            default: false
        },
        cycling: {
            type: Boolean,
            required: true,
            default: false
        },
        tennis: {
            type: Boolean,
            required: true,
            default: false
        },
        gymnastics: {
            type: Boolean,
            required: true,
            default: false
        },
        yoga: {
            type: Boolean,
            required: true,
            default: false
        },
        rugby: {
            type: Boolean,
            required: true,
            default: false
        },
        lacrosse: {
            type: Boolean,
            required: true,
            default: false
        },
        cricket: {
            type: Boolean,
            required: true,
            default: false
        },
        polo: {
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

const Sport = mongoose.model("Sport", sportSchema)
export default Sport;