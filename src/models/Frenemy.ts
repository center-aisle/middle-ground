import mongoose from "mongoose";
const Schema = mongoose.Schema;

const frenemiesSchema = new Schema ({
    array: [{
        type: String
    }]
});

const Frenemy = mongoose.model("frenemies", frenemiesSchema)
export default Frenemy;