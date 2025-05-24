import express from 'express';
import * as controller from '../controllers/controllerPricing.js';


const router = express.Router();

router.get('/', controller.getAll);
router.get('/:productItemId', controller.getByProductItemId);
router.post('/', controller.create);

export default router;