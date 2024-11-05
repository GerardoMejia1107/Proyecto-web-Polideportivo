import Sport from "../models/sportModel.js";

export const addSport = async (req, res) => {
  try {
    const { name } = req.body;
    const newSport = new Sport({
      name,
    });
    const saveNewSport = await newSport.save();
    res.status(201).json(saveNewSport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSports = async (req, res) => {
  try {
    const sports = await Sport.find();
    res.json(sports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
