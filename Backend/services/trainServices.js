import Train from "../models/trainModel.js";
import {getMySportById} from "./sportServices.js";

export const createTrain = async (trainData) => {
    try {
        if (await getMySportById(trainData.sport)) {
            const newTrain = new Train(trainData)
            return await newTrain.save();
        }
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getAllTrains = async () => {
    try {
        return await Train.find(undefined, undefined, undefined).populate("sport");
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getTrainById = async (id) => {
    const train = await Train.findById(id).populate("sport");
    if (!train) {
        throw new Error("Train not found");
    }
    return train;
}

export const deleteTrainById = async (id) => {
    try {
        const train = await getTrainById(id); //Verifico la existencia del doc con el id especificado
        if (train) {
            await train.deleteOne();
            return {message: "SportForm deleted successfully", train};
        }
    } catch (e) {
        throw new Error(e.message);
    }
};

export const updateTrainById = async (id, updatedTrainData) => {
    try {
        const train = await getTrainById(id); //Verifico que el existencia del doc
        if (train) {
            //Si existe el doc y el nombre no esta en uso
            train.set(updatedTrainData);
            await train.save();
            return train;
        }
    } catch (err) {
        throw new Error("Error updating train: " + err.message);
    }
};