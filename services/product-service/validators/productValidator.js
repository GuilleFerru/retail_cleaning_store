import { body } from 'express-validator';

import ProductCategory from '../models/ProductCategory.js';

export const productValidator = [
    body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long'),
    body('description')
        .optional()
        .isLength({ max: 500 })
        .withMessage('Description must be at most 500 characters long'),
    body('product_image')
        .optional()
        .isString().withMessage('Product image must be a string'),
    body('category_id')
        .optional()
        .custom(async (value) => {
            const category = await ProductCategory.findByPk(value);
            if (!category) {
                throw new Error('Category not found');
            }
            return true;
        }),
];