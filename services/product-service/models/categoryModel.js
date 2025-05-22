import ProductCategory from "./ProductCategory.js";
import Variation from "./Variation.js";
import VariationOption from "./VariationOption.js";

export const getAllCategoriesWithChildren = async () => {
    try {
        const categories = await ProductCategory.findAll({
            where: { parent_category_id: null },
            include: [
                {
                    model: ProductCategory,
                    as: 'subcategories',
                    include: [
                        {
                            model: Variation,
                            include: [VariationOption]
                        }
                    ]
                }
            ],
            order: [['category_name', 'ASC']]
        });

        return categories;
    } catch (err) {
        console.error('❌ Error al obtener categorías:', err);
        throw new Error('Internal server error');
    }
};

