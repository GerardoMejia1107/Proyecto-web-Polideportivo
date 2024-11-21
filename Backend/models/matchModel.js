import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    time: {type: String, required: true},
    location: {type: String, required: true},
    sport: {type: mongoose.Schema.Types.ObjectId, ref: "Sport", required: true},
    universityHome: {type: mongoose.Schema.Types.ObjectId, ref: "University", required: true},
    universityAway: {type: mongoose.Schema.Types.ObjectId, ref: "University", required: true},
    homeScore: {type: Number, default: 0}, // Marcador del equipo local
    awayScore: {type: Number, default: 0}, // Marcador del equipo visitante
    status: {
        type: String,
        required: true,
    },

    visibility: {
        type: Boolean,
        default: false,
    }
});

export default mongoose.model("Match", matchSchema);
