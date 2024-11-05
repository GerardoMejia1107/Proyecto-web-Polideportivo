import Sport from "../models/sportModel.js";

export const createSport = async (sportData) => {
  try {
    //Verifico que no exista el deporte
    if (!(await checkSportExists(sportData))) {
      const newSport = new Sport(sportData);
      return await newSport.save();
    }
    throw new Error("Sport already exists");
  } catch (e) {
    throw new Error(e.message);
  }
};

const checkSportExists = async (sportData) => {
  try {
    //Expression regex para encontrar si el nombre del deporte existe, independiente mente del patron del nombre
    const regex = new RegExp(`^${sportData.name.trim()}$`, "i"); //Le paso el nombre que contiene sportData
    const existingSport = await Sport.findOne({ name: { $regex: regex } }); //Busco en la BD si existe algun documento con el patron
    return !!existingSport; //Convierto el paso anterior en un boolean, si existe retornara true, sino entonces retorna false
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getAllSports = async () => {
  try {
    return await Sport.find(); //Retorno todos los documentos de la BD de la coleccion Sport
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getMySportById = async (id) => {
  const sport = await Sport.findById(id); //Hago la busqueda del doc con el id que le pase
  if (!sport) {
    throw new Error("Sport not found");
  }
  return sport;
};

export const deleteSportById = async (id) => {
  try {
    const sport = await getMySportById(id); //Verifico la existencia del doc con el id especificado
    if (sport) {
      await sport.deleteOne();
      return { message: "Sport deleted successfully", sport };
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const updateSportById = async (id, updatedSportData) => {
  try {
    const sport = await getMySportById(id); //Verifico que el existencia del doc
    const nameAlreadyExists = await checkSportExists(updatedSportData); //Verifico la existencia del nombre del deporte
    if (sport && !nameAlreadyExists) {
      //Si existe el doc y el nombre no esta en uso
      sport.set(updatedSportData);
      await sport.save();
      return sport;
    } else if (nameAlreadyExists) {
      throw new Error("Sport name already exists");
    }
  } catch (err) {
    throw new Error("Error updating sport: " + err.message);
  }
};
