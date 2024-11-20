import User from "../models/userModel.js";
import {addUser, getAllUsers} from "../services/authServices.js";
import {comparePassword} from "../helpers/auth.js";
import jwt from "jsonwebtoken";
import express from "express";

//Register controllers endpoints
export const registeredUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({});
    }
};

export const registerUser = async (req, res) => {
    try {
        const newUser = await addUser(req.body);
        res.status(200).json(newUser);
    } catch (err) {
        return res.status(400).send({message: err.message});
    }
};

//Login controllers endpoints
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Buscar usuario por email
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "Invalid email or password"});
        }

        // Comparar contraseña
        const match = await comparePassword(password, user.password);

        // Generar token JWT de forma síncrona
        if (match) {
            jwt.sign(
                {email: user.email, id: user._id, name: user.name}, // Payload
                process.env.JWT_SECRET, // Clave secreta
                {},
                (err, token) => {
                    if (err) throw err;
                    console.log("Token: ",  token);

                    res.cookie("token", token).json(user)

                }
            );
        }

        if (!match) {
            return res.status(400).json({message: "Invalid password"});
        }

        // Responder con el token y datos del usuario
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Internal Server Error"});
    }
};

export const getProfile = async (req, res) => {
    try{
        const {token} = req.cookies;
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
                if (err) throw err;
                res.json(user);
            })
        } else {
            res.json(null);
        }
    }catch (err){
        console.error("Error in getProfile:", err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const logout = async (req, res) => {
    res.clearCookie("token"); // Clear the JWT cookie
    res.status(200).json({ message: "Logged out successfully" });
}