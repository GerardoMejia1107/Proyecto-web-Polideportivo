import {createTrain, getAllTrains} from "../services/trainServices.js";

export const addTrain = async (req, res) => {
    try{
        const newTrain = await createTrain(req.body);
        res.status(201).send(newTrain);
    }catch (e){
        return res.status(400).send({ message: e.message });
    }
}

export const getTrains = async (req, res) => {
    try{
        const trains = await getAllTrains();
        res.json(trains);
    }catch (e){
        return res.status(500).send({ message: e.message });
    }
}