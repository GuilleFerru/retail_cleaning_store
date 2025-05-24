import * as PricingModel from '../models/modelPricing.js';


export const getAll = async (req, res) => {
    try {
        const pricing = await PricingModel.getAllPricing();
        res.json(pricing);
    } catch (err) {
        res.status(500).json({ error: 'Error getting pricing' });
    }
}

export const getByProductItemId = async (req, res) => {
    try {
        const { productItemId } = req.params;
        const pricing = await PricingModel.getPricingByProductItemId(productItemId);
        if (!pricing) {
            return res.status(404).json({ error: 'Pricing not found for this product item' });
        }
        res.json(pricing);
    } catch (err) {
        res.status(500).json({ error: 'Error getting pricing by product item ID' });
    }
}

export const create = async (req, res) => {
    try {
        const pricing = await PricingModel.createPricing(req.body);
        res.status(201).json(pricing);
    } catch (err) {
        res.status(500).json({ error: 'Error creating pricing' });
    }
}

export const update = async (req, res) => {
    try {
        const { productItemId } = req.params;
        const updatedPricing = await PricingModel.updatePricingByProductItemId(productItemId, req.body);
        if (!updatedPricing) {
            return res.status(404).json({ error: 'Pricing not found for this product item' });
        }
        res.json(updatedPricing);
    } catch (err) {
        res.status(500).json({ error: 'Error updating pricing' });
    }
}

export const remove = async (req, res) => {
    try {
        const deleted = await PricingModel.deletePricing(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Pricing not found' });
        res.json(deleted);
    } catch (err) {
        res.status(500).json({ error: 'Error deleting pricing' });
    }
}
