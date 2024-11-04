import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  id_university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
    required: true,
  },

  id_sport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sport",
    required: true,
  },

  trainer: {
    type: String,
  },
});

const Team = mongoose.model("Team", teamSchema);

export default Team;
