import db from '../models/index.js';

const { ProductCategory } = db;

export const getAllCategoriesWithChildren = async (req, res) => {
    try {
        const categories = await ProductCategory.findAll({
            where: { parent_category_id: null }, // solo las raíces
            include: {
                model: ProductCategory,
                as: 'subcategories',
            },
            order: [['category_name', 'ASC']]
        });

        res.json(categories);
    } catch (err) {
        console.error('❌ Error al obtener categorías:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
