import User from "../models/userModel.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

//Register services
export const addUser = async (userData) => {
  try {
    // Verifica si el correo ya está en uso
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("Email is already in use");
    }

    // Verifica si la contraseña tiene al menos 6 caracteres
    if (userData.password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    const hashedPassword = await hashPassword(userData.password);
    const newData = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    };

    const newUser = new User(newData);
    return await newUser.save();
  } catch (err) {
    console.error("Error in addUser:", err.message);
    throw err; // Lanza el error para manejarlo en niveles superiores
  }
};

export const getAllUsers = async () => {
  try {
    return await User.find(undefined, undefined, undefined);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const loginService = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // Generar el token JWT de forma asincrónica
  const token = jwt.sign(
    { email: user.email, id: user._id, name: user.name }, // Payload
    process.env.JWT_SECRET, // Clave secreta
    { expiresIn: "1h" } // Opciones
  );

  return { user, token }; // Devolver el usuario y el token
};
