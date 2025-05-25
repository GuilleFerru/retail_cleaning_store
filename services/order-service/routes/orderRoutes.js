import express from 'express';
import * as controller from '../controllers/controllerOrder.js';


const router = express.Router();

router.get('/:id', controller.getAll);
router.post('/', controller.create);

export default router;