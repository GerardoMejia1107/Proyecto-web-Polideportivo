import express from "express";
import cors from "cors";
import {registeredUsers, registerUser, login, getProfile, logout} from "../controllers/authController.js";


const router = express.Router();

router.use(cors(
    {
        credentials: true,
        origin: "http://localhost:5173",
    }
));

router.post("/register", registerUser);
router.post("/login", login);
router.post('/logout', logout);

router.get("/profile", getProfile)


export default router;