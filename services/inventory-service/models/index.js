// models/index.js
import sequelize from '../config/db.js';
import InventoryEvent from './InventoryEvent.js';

const db = {
    sequelize,
    InventoryEvent
};

export default db;
