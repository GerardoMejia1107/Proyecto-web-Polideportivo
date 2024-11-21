import express from "express";
import {
    addMatch,
    getMatches,
    getMatch,
    updateMatch,
    deleteMatch,
} from "../controllers/matchController.js";

const router = express.Router();

// Crear un partido
router.post("/create", addMatch);

// Obtener todos los partidos
router.get("/getAll", getMatches);

// Obtener un partido por ID
router.get("/:id", getMatch);

// Actualizar un partido por ID
router.put("/update/:id", updateMatch);

// Eliminar un partido por ID
router.delete("/delete/:id", deleteMatch);

export default router;
