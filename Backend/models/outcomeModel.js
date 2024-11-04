import mongoose from "mongoose";

const outcomeSchema = new mongoose.Schema({
  id_match: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Match",
    required: true,
  },

  score_first_team: {
    type: Number,
    required: true,
  },
  score_second_team: {
    type: Number,
    required: true,
  },
  sets_first_team: {
    type: Number,
  },
  sets_second_team: {
    type: Number,
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
});

const Outcome = mongoose.model("Outcome", outcomeSchema);

export default Outcome;
