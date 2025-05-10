// models/ProductItem.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const ProductItem = sequelize.define('ProductItem', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    product_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    sku: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    product_image: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: 'product_item',
    timestamps: false,
});

export default ProductItem;
