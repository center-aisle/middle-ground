import mongoose from "mongoose";
const Schema = mongoose.Schema;

    const musicSchema = new Schema ({
        pop: {
            type: Boolean,
            required: true,
            default: false
        },
        country: {
            type: Boolean,
            required: true,
            default: false
        },
        rap: {
            type: Boolean,
            required: true,
            default: false
        },
        hiphop: {
            type: Boolean,
            required: true,
            default: false
        },        
        edm: {
            type: Boolean,
            required: true,
            default: false
        },
        rock: {
            type: Boolean,
            required: true,
            default: false
        },
        alternative: {
            type: Boolean,
            required: true,
            default: false
        },
        rnb: {
            type: Boolean,
            required: true,
            default: false
        },
        folk: {
            type: Boolean,
            required: true,
            default: false
        },
        blues: {
            type: Boolean,
            required: true,
            default: false
        },
        metal: {
            type: Boolean,
            required: true,
            default: false
        },
        instrumental: {
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

const Music = mongoose.model("Music", musicSchema)
export default Music