import express from "express";
import {
  addUniversity,
  getUniversities,
  getUniversityById,
  deleteUniversity,
  updateUniversity,
} from "../controllers/universityController.js";

const router = express.Router();

router.post("/create", addUniversity);
router.get("/getAll", getUniversities);
router.get("/:id", getUniversityById);
router.delete("/delete/:id", deleteUniversity);
router.put("/update/:id", updateUniversity);

export default router;
