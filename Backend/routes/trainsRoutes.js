import express from "express";

import {getTrains, addTrain, getMyTrainById, updateTrain, deleteTrain} from "../controllers/trainController.js";
import {deleteUniversity, getUniversityById, updateUniversity} from "../controllers/universityController.js";


const router = express.Router();

router.post("/create", addTrain);
router.get("/getAll", getTrains);
router.get("/:id", getMyTrainById);
router.delete("/delete/:id", deleteTrain);
router.put("/update/:id", updateTrain);



export default router;