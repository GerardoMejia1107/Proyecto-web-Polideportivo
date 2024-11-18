import express from "express";

import {getTrains, addTrain} from "../controllers/trainController.js";


const router = express.Router();

router.post("/create", addTrain);
router.get("/getAll", getTrains);


export default router;