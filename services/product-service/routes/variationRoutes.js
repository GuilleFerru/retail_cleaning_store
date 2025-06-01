import express from 'express';
import * as controller from '../controllers/variationController.js';

const router = express.Router();

router.get('/variations', controller.getAll);
router.get('/variations/:id', controller.getById);


export default router;