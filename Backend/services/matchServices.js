import Match from "../models/matchModel.js";
import University from "../models/universityModel.js";
import Sport from "../models/sportModel.js";
import ERROR_MESSAGES from "../utils/errorMessages.js";

export const createMatch = async (matchData) => {
    try {
        const universityHome = await University.findById(matchData.universityHome);
        const universityAway = await University.findById(matchData.universityAway);
        if (!universityHome || !universityAway) {
            throw new Error(ERROR_MESSAGES.match.universityNotFound);
        }

        const sport = await Sport.findById(matchData.sport);
        if (!sport) {
            throw new Error(ERROR_MESSAGES.match.sportNotFound);
        }

        const match = new Match(matchData);
        return await match.save();
    } catch (e) {
        throw new Error(ERROR_MESSAGES.match.creationFailed);
    }
};

export const getAllMatches = async () => {
    try {
        return await Match.find()
            .populate("sport", 'name')
            .populate("universityHome", 'name location')
            .populate("universityAway", 'name location');
    } catch (e) {
        throw new Error(ERROR_MESSAGES.general.fetchError);
    }
};

export const getMatchById = async (id) => {
    try {
        const match = await Match.findById(id)
            .populate("sport", "name")
            .populate("universityHome", "name location logo")
            .populate("universityAway", "name location logo")
            .populate("result");
        if (!match) {
            throw new Error(ERROR_MESSAGES.match.notFound);
        }
        return match;
    } catch (e) {
        throw new Error(ERROR_MESSAGES.general.fetchError);
    }
};

export const updateMatchById = async (id, matchData) => {
    try {
        const match = await getMatchById(id);

        // Verificar universidades y deporte si están en los datos para actualizar
        if (matchData.universityHome) {
            const universityHome = await University.findById(matchData.universityHome);
            if (!universityHome) throw new Error(ERROR_MESSAGES.match.universityNotFound);
        }
        if (matchData.universityAway) {
            const universityAway = await University.findById(matchData.universityAway);
            if (!universityAway) throw new Error(ERROR_MESSAGES.match.universityNotFound);
        }
        if (matchData.sport) {
            const sport = await Sport.findById(matchData.sport);
            if (!sport) throw new Error(ERROR_MESSAGES.match.sportNotFound);
        }

        // Actualizar los datos del partido
        Object.assign(match, matchData);
        return await match.save();
    } catch (e) {
        throw new Error(ERROR_MESSAGES.match.updateFailed);
    }
};

// NUEVA FUNCIÓN: deleteMatchById
export const deleteMatchById = async (id) => {
    try {
        const match = await Match.findById(id);
        if (!match) {
            throw new Error(ERROR_MESSAGES.match.notFound);
        }
        await match.deleteOne(); // Eliminar el partido
        return {message: "Partido eliminado exitosamente."};
    } catch (e) {
        throw new Error(ERROR_MESSAGES.match.deletionFailed);
    }
};
