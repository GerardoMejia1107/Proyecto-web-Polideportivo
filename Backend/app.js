import express, { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
import mainRoutes from "./routes/mainRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config(); // Cargar variables de entorno primero


const app = express();

// Configuración de CORS
const CORS_OPTIONS = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Set-Cookie"],
};

app.use(cors(CORS_OPTIONS));
app.options("*", cors(CORS_OPTIONS));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
app.use("/api", mainRoutes);

// Middleware de Error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

// Conexión a MongoDB
const URI = `${process.env.MONGO_URI}`;
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Error connecting to DB", err);
  });

// Eventos de conexión de Mongoose (Opcional para depuración)
mongoose.connection.on("connected", () => {
  console.log("MongoDB connection established");
});

mongoose.connection.on("error", (err) => {
  console.error("Error in MongoDB connection:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

export default app;
