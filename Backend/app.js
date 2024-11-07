import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import mainRoutes from "./routes/mainRoutes.js";
import dotenv from "dotenv";

const app = express();

//Definiendo las configuraciones del CORS
const CORS_OPTIONS = {
  origin: "*", //Con estor permito solicitudes desde cualquier origen
  methods: ["GET", "PUT", "POST", "DELETE"], //Definiendo los metodos permitidos
  allowHeaders: ["Content-Type", "Authorization"], //Headers permitidos
};

//NOTE - Middlewares para mi proyecto
app.use(cors(CORS_OPTIONS));
app.options("*", cors(CORS_OPTIONS)); //Manejo de solicitudes preflight
/*NOTE - Mecanismo para proteger a los servidores de solicitudes no autorizadas, es como una solicitud de ensayo
que lleva la información del origin, metodo y headers, si se apreuba entonces se avanza a la solicitud real
*/
app.use(express.json());
app.use("/api", mainRoutes);
// Middleware para manejar los erroes que puedan suceder en las solicitudes
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

//Conectando con la base de datos MongoDB
dotenv.config(); //Configuracion del dotenv
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
