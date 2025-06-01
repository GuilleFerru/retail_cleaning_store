import express from 'express';
import * as controller from '../controllers/productController.js';
import { productValidator } from '../validators/productValidator.js';
import { handleValidationErrors } from '../middlewares/validate.js';

const router = express.Router();

router.get('/products', controller.getAll);
router.get('/products/:id', controller.getById);
router.post('/products', productValidator, handleValidationErrors, controller.create);
router.put('/products/:id', controller.update);
router.delete('/products/:id', controller.remove);

export default router;