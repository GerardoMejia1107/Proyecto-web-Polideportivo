import {
  createSport,
  getAllSports,
  getMySportById,
  deleteSportById,
  updateSportById,
} from "../services/sportServices.js";

export const addSport = async (req, res) => {
  try {
    const newSport = await createSport(req.body);
    res.status(200).json(newSport);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

export const getSports = async (req, res) => {
  try {
    const sports = await getAllSports();
    res.json(sports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSportById = async (req, res) => {
  try {
    const sport = await getMySportById(req.params.id);
    res.json(sport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSport = async (req, res, next) => {
  try {
    const deletedSport = await deleteSportById(req.params.id);
    res.status(200).json({ message: "Sport deleted", data: deletedSport });
  } catch (error) {
    next(error); // Pass error to error handling middleware
  }
};

export const updateSport = async (req, res, next) => {
  try {
    const updatedSport = await updateSportById(req.params.id, req.body);
    res.status(200).json({ message: "Sport updated", data: updatedSport });
  } catch (error) {
    next(error); // Pass error to error handling middleware
  }
};
