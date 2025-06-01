import express from 'express';
import * as controller from '../controllers/controllerOrder.js';
import { orderValidator } from '../validators/orderValidator.js';
import { handleValidationErrors } from '../middlewares/validate.js';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', orderValidator, handleValidationErrors, controller.create);
router.delete('/:id', controller.remove);

export default router;