import express from "express";
import sportRoutes from "../routes/sportRoutes.js";
import universityRoutes from "../routes/universityRoutes.js";
import trainsRoutes from "./trainsRoutes.js";
import authRoutes from "./authRoutes.js";
import matchRoutes from "./matchRoutes.js";

const router = express.Router();

//FIXME - Ruta para los deportes, por el momento la ruta es general tanto para usuario y administrador
router.use("/sports", sportRoutes);
router.use("/universities", universityRoutes);
router.use("/trains", trainsRoutes);
router.use("/matches", matchRoutes);
router.use('/auth', authRoutes)

export default router;
