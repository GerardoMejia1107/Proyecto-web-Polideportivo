import express from "express";
import sportRoutes from "../routes/sportRoutes.js";

const router = express.Router();

//FIXME - Ruta para los deportes, por el momento la ruta es general tanto para usuario y administrador
router.use("/sports", sportRoutes);

export default router;
