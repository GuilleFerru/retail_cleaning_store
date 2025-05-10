// routes/inventoryRoutes.js
import express from 'express';
import {
    createInventoryEvent,
    getStockByProductItemId
} from '../controllers/inventoryController.js';

const router = express.Router();

router.post('/', createInventoryEvent);
router.get('/:product_item_id', getStockByProductItemId);

export default router;
