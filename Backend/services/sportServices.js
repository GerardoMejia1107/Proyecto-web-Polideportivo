import Sport from "../models/sportModel.js";

export const createSport = async (sportData) => {
  try {
    //REVIEW - Expression regex para verificar los nombrse de los deportes, independientemente de como sea escrito
    const regex = new RegExp(`^${sportData.name.trim()}$`, "i");
    const existingSport = await Sport.findOne({ name: { $regex: regex } });
    if (!existingSport) {
      const newSport = new Sport(sportData);
      return await newSport.save();
    }
    throw new Error("Sport already exists");
  } catch (e) {
    throw new Error(e);
  }
};

export const getAllSports = async () => {
  try {
    const sports = Sport.find();
    return await sports;
  } catch (err) {
    throw new Error(err);
  }
};

export const getMySportById = async (id) => {
  const sport = await Sport.findById(id);
  if (!sport) {
    throw new Error("Sport not found");
  }
  return sport;
};

export const deleteSportById = async (id) => {
  const sport = await getMySportById(id);
  if (sport) {
    await sport.deleteOne();
    return sport;
  }
};

export const updateSportById = async (id, updatedSportData) => {
  try {
    const sport = await getMySportById(id);
    if (sport) {
      sport.set(updatedSportData);
      await sport.save();
      return sport;
    }
  } catch (err) {
    throw new Error("Error updating");
  }
};
