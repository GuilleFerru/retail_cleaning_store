import Pricing from "./Pricing.js";

export const getAllPricing = async () => {
    return await Pricing.findAll({ order: [['id', 'ASC']] });
}

export const getPricingByProductItemId = async (productItemId) => {
    return await Pricing.findOne({
        where: { product_item_id: productItemId }
    });
}

export const createPricing = async (data) => {
    return await Pricing.create(data);
}

export const updatePricingByProductItemId = async (productItemId, data) => {
    const pricing = await Pricing.findOne({
        where: { product_item_id: productItemId }
    });
    if (!pricing) return null;
    return await pricing.update(data);
}

export const deletePricing = async (id) => {
    const pricing = await Pricing.findByPk(id);
    if (!pricing) return null;
    await pricing.destroy();
    return pricing;
}