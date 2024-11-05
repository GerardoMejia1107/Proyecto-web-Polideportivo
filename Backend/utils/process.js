export const checkDocumentExists = async (collection, documentData) => {
  try {
    //Expression regex para encontrar si el nombre del deporte existe, independiente mente del patron del nombre
    const regex = new RegExp(`^${documentData.name.trim()}$`, "i"); //Le paso el nombre que contiene sportData
    const existingDocument = await collection.findOne({
      name: { $regex: regex },
    }); //Busco en la BD si existe algun documento con el patron
    return !!existingDocument; //Convierto el paso anterior en un boolean, si existe retornara true, sino entonces retorna false
  } catch (e) {
    throw new Error(e.message);
  }
};
