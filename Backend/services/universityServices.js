import University from "../models/universityModel.js";
import {checkDocumentExists} from "../utils/process.js";

export const createUniversity = async (universityData) => {
    try {
        const newUniversity = new University(universityData);
        return await newUniversity.save();
    } catch (e) {
        throw new Error(e.message);
    }
};

export const getAllUniversities = async () => {
    try {
        return await University.find();
    } catch (e) {
        throw new Error(e.message);
    }
};

export const getMyUniversityById = async (id) => {
    try {
        const university = await University.findById(id);
        if (!university) {
            throw new Error("UniversityForm not found");
        }
        return university;
    } catch (e) {
        throw new Error(e.message);
    }
};

export const deleteUniversityById = async (id) => {
    try {
        const university = await getMyUniversityById(id);
        if (university) {
            await university.deleteOne();
            return {message: "UniversityForm deleted successfully", university};
        }
    } catch (e) {
        throw new Error(e.message);
    }
};

export const updateUniversityById = async (id, updatedUniversityData) => {
    try {
        const university = await getMyUniversityById(id);
        if (university) {
            university.set(updatedUniversityData);
            await university.save();
            return university;
        }
    } catch (e) {
        throw new Error(e.message);
    }
};
