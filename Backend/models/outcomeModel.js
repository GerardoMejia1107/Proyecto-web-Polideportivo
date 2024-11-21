import mongoose from "mongoose";

const outcomeSchema = new mongoose.Schema({
    id_match: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match",
        required: true,
    },

    score_first_univ: {
        type: Number,
        required: true,
    },

    score_second_univ: {
        type: Number,
        required: true,
    },
});

const Outcome = mongoose.model("Outcome", outcomeSchema);

export default Outcome;