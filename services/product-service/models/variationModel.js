import Variation from "../models/Variation.js";

export const getAllVariations = async () => {
    return await Variation.findAll({ order: [['id', 'ASC']] });
};

export const getAllVariationsWithOptions = async () => {
    return await Variation.findAll({ order: [['id', 'ASC']] });
};