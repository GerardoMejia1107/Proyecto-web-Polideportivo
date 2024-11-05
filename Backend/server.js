import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bienvenido al Centro Polideportivo UCA!");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${process.env.SERVER_PORT}`);
});
