import Train from "../models/trainModel.js";
import {checkDocumentExists} from "../utils/process.js";
import {getMySportById} from "./sportServices.js";

export const createTrain = async (trainData) => {
    try {

        const newTrain = new Train(trainData)

        if (await getMySportById(trainData.sport)) return await newTrain.save();


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