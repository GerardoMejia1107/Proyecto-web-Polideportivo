import express from "express";
import cors from "cors";
import {registeredUsers, registerUser, login} from "../controllers/authController.js";


const router = express.Router();


router.get("/users", registeredUsers);
router.post("/register", registerUser);
router.post("/login", login);


export default router;