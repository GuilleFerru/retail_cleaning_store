import * as ProductModel from '../models/productModel.js';

export const getAll = async (req, res) => {
  try {
    const products = await ProductModel.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error getting products' });
  }
};

export const getById = async (req, res) => {
  try {
    const product = await ProductModel.getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error getting product' });
  }
};

export const create = async (req, res) => {
  try {
    const product = await ProductModel.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error creating product' });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await ProductModel.updateProduct(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Product not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Error updating product' });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await ProductModel.deleteProduct(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: 'Error deleting product' });
  }
};