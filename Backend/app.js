import express, { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
import mainRoutes from "./routes/mainRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

// Configuring CORS
const CORS_OPTIONS = {
  origin: "http://localhost:5173", // Allow your frontend
  credentials: true, // Enable sending/receiving cookies
  methods: ["GET", "PUT", "POST", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed request headers
  exposedHeaders: ["Set-Cookie"], // Expose Set-Cookie header to the frontend
};

app.use(cors(CORS_OPTIONS));
app.options("*", cors(CORS_OPTIONS)); // Handle preflight requests

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
app.use("/api", mainRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

// Connect to MongoDB
dotenv.config();
const URI = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Error connecting to DB", err);
  });

export default app;
