import express from 'express';
import * as controller from '../controllers/variationController.js';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);


export default router;