import { body } from 'express-validator';

export const orderValidator = [
  body('product_item_id').notEmpty().withMessage('product_item_id is required'),
  body('quantity').isInt({ min: 1 }).withMessage('quantity must be at least 1'),
  body('unit_price').isDecimal().withMessage('unit_price must be a decimal'),
  body('total').isDecimal().withMessage('total must be a decimal'),
  body('payment_method').notEmpty().withMessage('payment_method is required')
];
