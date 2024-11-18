import Sport from "../models/sportModel.js";
import {checkDocumentExists} from "../utils/process.js";

export const createSport = async (sportData) => {
    try {
        //Verifico que no exista el deporte
        const newSport = new Sport(sportData);
        return await newSport.save();
    } catch (e) {
        throw new Error(e.message);
    }
};

export const getAllSports = async () => {
    try {
        return await Sport.find(undefined, undefined, undefined); //Retorno todos los documentos de la BD de la coleccion SportForm
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getMySportById = async (id) => {
    const sport = await Sport.findById(id); //Hago la busqueda del doc con el id que le pase
    if (!sport) {
        throw new Error("SportForm not found");
    }
    return sport;
};

export const deleteSportById = async (id) => {
    try {
        const sport = await getMySportById(id); //Verifico la existencia del doc con el id especificado
        if (sport) {
            await sport.deleteOne();
            return {message: "SportForm deleted successfully", sport};
        }
    } catch (e) {
        throw new Error(e.message);
    }
};

export const updateSportById = async (id, updatedSportData) => {
    try {
        const sport = await getMySportById(id); //Verifico que el existencia del doc
        if (sport) {
            //Si existe el doc y el nombre no esta en uso
            sport.set(updatedSportData);
            await sport.save();
            return sport;
        }
    } catch (err) {
        throw new Error("Error updating sport: " + err.message);
    }
};
