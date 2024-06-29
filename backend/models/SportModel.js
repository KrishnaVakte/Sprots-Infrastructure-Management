import mongoose, { trusted } from "mongoose";

const SportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    }
})

const SportModel = mongoose.models.Sport ||  mongoose.model("SportModel", SportSchema);

export default SportModel;