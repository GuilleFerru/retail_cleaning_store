import sequelize from '../config/db.js';
import Pricing from './Pricing.js';

const db = {
    sequelize,
    Pricing
};

export default db;