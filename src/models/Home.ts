import mongoose from "mongoose";
const Schema = mongoose.Schema;

    const homeSchema = new Schema ({
        reading: {
            type: Boolean,
            required: true,
            default: false
        },
        cooking: {
            type: Boolean,
            required: true,
            default: false
        },
        baking: {
            type: Boolean,
            required: true,
            default: false
        },
        knitting: {
            type: Boolean,
            required: true,
            default: false
        },        
        sewing: {
            type: Boolean,
            required: true,
            default: false
        },
        boardgames: {
            type: Boolean,
            required: true,
            default: false
        },
        gardening: {
            type: Boolean,
            required: true,
            default: false
        },
        DIYHomeProjects: {
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

const Home = mongoose.model("Home", homeSchema)
export default Home;