import mongoose from "mongoose";
const Schema = mongoose.Schema;

const frenemiesSchema = new Schema ({
    array: [{
        type: String
    }]
});

const frenemies = mongoose.model("frenemies", frenemiesSchema)
export default frenemies;