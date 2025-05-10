// controllers/inventoryController.js
import db from '../models/index.js';

const { InventoryEvent } = db;

export const createInventoryEvent = async (req, res) => {
    try {
        const { product_item_id, type, quantity, reason } = req.body;

        if (!product_item_id || !type || !quantity) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const event = await InventoryEvent.create({
            product_item_id,
            type,
            quantity,
            reason
        });

        res.status(201).json(event);
    } catch (err) {
        console.error('❌ Error creating inventory event:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getStockByProductItemId = async (req, res) => {
    try {
        const { product_item_id } = req.params;

        const events = await InventoryEvent.findAll({
            where: { product_item_id }
        });

        if (!events.length) {
            return res.status(404).json({ message: 'No inventory events found for this SKU' });
        }

        // Calcular el stock actual
        const currentStock = events.reduce((total, event) => {
            if (event.type === 'ADD') return total + parseFloat(event.quantity);
            if (event.type === 'REMOVE') return total - parseFloat(event.quantity);
            if (event.type === 'ADJUST') return parseFloat(event.quantity); // reemplaza total
            return total;
        }, 0);

        res.json({ product_item_id, stock: currentStock });
    } catch (err) {
        console.error('❌ Error getting stock:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
