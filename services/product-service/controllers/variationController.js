import * as VariationModel from '../models/variationModel.js';


export const getAll = async (req, res) => {
    try {
        const variations = await VariationModel.getAllWithOptions();
        res.json(variations);
    } catch (err) {
        res.status(500).json({ error: 'Error getting variations' });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const variation = await VariationModel.getByIdWithOptions(id);
        if (!variation) {
            return res.status(404).json({ error: 'Variation not found' });
        }
        res.json(variation);
    } catch (err) {
        res.status(500).json({ error: 'Error getting variation' });
    }
}

// export const getAllVariationsWithOptions = async (req, res) => {
//     try {
//         const variations = await VariationModel.getAllVariationsWithChildren();
//         res.json(variations);
//     } catch (err) {
//         res.status(500).json({ error: 'Error getting variations with children' });
//     }
// }