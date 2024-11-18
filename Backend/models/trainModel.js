import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    sport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sport",
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }

});

const Train = mongoose.model("Train", trainSchema);
export default Train
