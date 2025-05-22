import express from 'express';
import * as controller from '../controllers/productController.js';
import { productValidator } from '../validators/productValidator.js';
import { handleValidationErrors } from '../middlewares/validate.js';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', productValidator, handleValidationErrors, controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;