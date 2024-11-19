import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  
  id_first_univ: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
    required: true,
  },

  id_second_univ: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
    required: true,
  },

  id_sport:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sport",
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
