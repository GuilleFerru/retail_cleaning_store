import sequelize from '../config/db.js';
import Order from './Order.js';

const db = {
    sequelize,
    Order
};

export default db;