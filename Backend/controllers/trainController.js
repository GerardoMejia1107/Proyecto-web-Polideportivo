import {createTrain, getAllTrains, getTrainById, updateTrainById, deleteTrainById} from "../services/trainServices.js";
import {deleteUniversityById, updateUniversityById} from "../services/universityServices.js";

export const addTrain = async (req, res) => {
    try {
        const newTrain = await createTrain(req.body);
        res.status(201).send(newTrain);
    } catch (e) {
        return res.status(400).send({message: e.message});
    }
}

export const getTrains = async (req, res) => {
    try {
        const trains = await getAllTrains();
        res.json(trains);
    } catch (e) {
        return res.status(500).send({message: e.message});
    }
}

export const getMyTrainById = async (req, res) => {
    try {
        const train = await getTrainById(req.params.id);
        res.status(200).json(train);
    } catch (e) {
        return res.status(400).send({message: e.message});
    }
}


export const deleteTrain = async (req, res, next) => {
    try {
        const deletedTrain = await deleteTrainById(req.params.id);
        res
            .status(200)
            .json({ message: "Train deleted", data: deletedTrain });
    } catch (e) {
        next(e); // Pass error to error handling middleware
    }
};

export const updateTrain = async (req, res, next) => {
    try {
        const updatedTrain = await updateTrainById(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedTrain);
    } catch (e) {
        next(e); // Pass error to error handling middleware
    }
};
