import express from "express";

import {
  addSport,
  getSports,
  getSportById,
  deleteSport,
  updateSport,
} from "../controllers/sportController.js";
const router = express.Router();

router.post("/create", addSport);
router.get("/getAll", getSports);
router.get("/:id", getSportById);
router.delete("/:id", deleteSport);
router.put("/update/:id", updateSport);

export default router;
