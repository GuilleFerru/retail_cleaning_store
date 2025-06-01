import db from '../models/index.js';
const { Order } = db;

export const getAll = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (err) {
        console.error('❌ Error getting orders:', err);
        res.status(500).json({ error: 'Error getting orders' });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        console.error('❌ Error getting order by id:', err);
        res.status(500).json({ error: 'Error getting order' });
    }
};

import { validationResult } from 'express-validator';

export const create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { product_item_id, product_name, sku, quantity, unit_price, total, payment_method, status } = req.body;
        const newOrder = await Order.create({
            product_item_id,
            product_name,
            sku,
            quantity,
            unit_price,
            total,
            payment_method,
            status: status || 'pending'
        });
        res.status(201).json(newOrder);
    } catch (err) {
        console.error('❌ Error creating order:', err);
        res.status(500).json({ error: 'Error creating order' });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        await order.destroy();
        res.json({ message: 'Order deleted' });
    } catch (err) {
        console.error('❌ Error deleting order:', err);
        res.status(500).json({ error: 'Error deleting order' });
    }
};