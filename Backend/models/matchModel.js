import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  id_first_team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },

  id_second_team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
});

const Match = mongoose.model("Match", matchSchema);
export default Match;
