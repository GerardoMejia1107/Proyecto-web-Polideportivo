import {
  createUniversity,
  getAllUniversities,
  getMyUniversityById,
  deleteUniversityById,
  updateUniversityById,
} from "../services/universityServices.js";

export const addUniversity = async (req, res) => {
  try {
    const university = await createUniversity(req.body);
    res.status(200).json(university);
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

export const getUniversities = async (req, res) => {
  try {
    const universities = await getAllUniversities();
    res.status(200).json(universities);
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

export const getUniversityById = async (req, res) => {
  try {
    const university = await getMyUniversityById(req.params.id);
    res.status(200).json(university);
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

export const deleteUniversity = async (req, res, next) => {
  try {
    const deletedUniversity = await deleteUniversityById(req.params.id);
    res
      .status(200)
      .json({ message: "UniversityForm deleted", data: deletedUniversity });
  } catch (e) {
    next(e); // Pass error to error handling middleware
  }
};

export const updateUniversity = async (req, res, next) => {
  try {
    const updatedUniversity = await updateUniversityById(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedUniversity);
  } catch (e) {
    next(e); // Pass error to error handling middleware
  }
};
