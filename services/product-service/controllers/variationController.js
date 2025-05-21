import * as VariationModel from '../models/variationModel.js';


export const getAll = async (req, res) => {
    try {
        const variations = await VariationModel.getAllVariations();
        res.json(variations);
    } catch (err) {
        res.status(500).json({ error: 'Error getting variations' });
    }
};

export const getAllVariationsWithOptions = async (req, res) => {
    try {
        const variations = await VariationModel.getAllVariationsWithChildren();
        res.json(variations);
    } catch (err) {
        res.status(500).json({ error: 'Error getting variations with children' });
    }
}