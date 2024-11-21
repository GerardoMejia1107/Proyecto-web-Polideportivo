const ERROR_MESSAGES = {
    university: {
    notFound: "La universidad no existe.",
    creationFailed: "No se pudo crear la universidad.",
    updateFailed: "No se pudo actualizar la universidad.",
    deletionFailed: "No se pudo eliminar la universidad.",
    },
    sport: {
    notFound: "El deporte no existe.",
    creationFailed: "No se pudo crear el deporte.",
    updateFailed: "No se pudo actualizar el deporte.",
    deletionFailed: "No se pudo eliminar el deporte.",
    },
    match: {
    notFound: "El partido no existe.",
    creationFailed: "No se pudo crear el partido.",
    updateFailed: "No se pudo actualizar el partido.",
    deletionFailed: "No se pudo eliminar el partido.",
    universityNotFound: "Una o ambas universidades no existen.",
    sportNotFound: "El deporte especificado no existe.",
    },
    general: {
    fetchError: "Error al obtener los datos.",
    unknownError: "Ocurrió un error desconocido.",
    },
};
    export default ERROR_MESSAGES;