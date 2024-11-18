import express from "express";
import sportRoutes from "../routes/sportRoutes.js";
import universityRoutes from "../routes/universityRoutes.js";
import trainsRoutes from "./trainsRoutes.js";

const router = express.Router();

//FIXME - Ruta para los deportes, por el momento la ruta es general tanto para usuario y administrador
router.use("/sports", sportRoutes);
router.use("/universities", universityRoutes);
router.use("/trains", trainsRoutes)

export default router;
