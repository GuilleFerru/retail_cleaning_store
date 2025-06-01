import express from 'express';
import { getAllCategoriesWithChildren } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/categories', getAllCategoriesWithChildren);

export default router;
