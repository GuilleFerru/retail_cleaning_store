import * as CategoryModel from '../models/categoryModel.js';



export const getAllCategoriesWithChildren = async (req, res) => {
    try {
        const categories = await CategoryModel.getAllCategoriesWithChildren();
        res.json(categories);
    } catch (err) {
        console.error('❌ Error al obtener categorías:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
