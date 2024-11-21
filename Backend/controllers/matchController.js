import {
    createMatch,
    getAllMatches,
    getMatchById,
    updateMatchById,
    deleteMatchById,
} from "../services/matchServices.js";

export const addMatch = async (req, res, next) => {
    try {
        const match = await createMatch(req.body);
        res.status(201).json({
            message: "Partido creado exitosamente",
            data: match,
        });
    } catch (e) {
        next(e); // Pasar el error al middleware global
    }
};

export const getMatches = async (req, res, next) => {
    try {
        const matches = await getAllMatches();
        res.status(200).json(matches);
    } catch (e) {
        next(e);
    }
};

export const getMatch = async (req, res, next) => {
    try {
        const match = await getMatchById(req.params.id);
        res.status(200).json(match);
    } catch (e) {
        next(e);
    }
};

export const updateMatch = async (req, res, next) => {
    try {
        const updatedMatch = await updateMatchById(req.params.id, req.body);
        res.status(200).json({
            message: "Partido actualizado exitosamente",
            data: updatedMatch,
        });
    } catch (e) {
        next(e);
    }
};

export const deleteMatch = async (req, res, next) => {
    try {
        const result = await deleteMatchById(req.params.id);
        res.status(200).json(result);
    } catch (e) {
        next(e);
    }
};
