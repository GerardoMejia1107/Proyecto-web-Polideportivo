import mongoose from "mongoose";

//Creacion del Schema
const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  logo: {
    type: String,
    required: true,
  },
});

//Creacion del modelo de datos, de parametros paso, el nombre con el cual quiero hacer referencia, y el schema
const University = mongoose.model("University", universitySchema);

export default University;
