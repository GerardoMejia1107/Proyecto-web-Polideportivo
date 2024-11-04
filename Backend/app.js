import express from "express";
import cors from "cors";

const app = express();

//Definiendo las configuraciones del CORS
const CORS_OPTIONS = {
  origin: "*", //Con estor permito solicitudes desde cualquier origen
  methods: ["GET", "PUT", "POST", "DELETE"], //Definiendo los metodos permitidos
  allowHeaders: ["Content-Type", "Authorization"], //Headers permitidos
};

app.use(cors(CORS_OPTIONS));

app.options("*", cors(CORS_OPTIONS)); //Manejo de solicitudes preflight
/*NOTE - Mecanismo para proteger a los servidores de solicitudes no autorizadas, es como una solicitud de ensayo
que lleva la información del origin, metodo y headers, si se apreuba entonces se avanza a la solicitud real
*/

app.use(express.json());

export default app;
