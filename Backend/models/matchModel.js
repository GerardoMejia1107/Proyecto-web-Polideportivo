import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
    date: {type: Date, required: true},

    time: {type: String, required: true},

    location: {type: String, required: true},

    sport: {type: mongoose.Schema.Types.ObjectId, ref: "Sport", required: true},

    universityHome: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "University",
        required: true,
    },

    universityAway: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "University",
        required: true,
    },

    result: {type: mongoose.Schema.Types.ObjectId, ref: "Outcome"}, // Resultado del partido
});

export default mongoose.model("Match", matchSchema);