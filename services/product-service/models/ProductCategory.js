// models/ProductCategory.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const ProductCategory = sequelize.define('ProductCategory', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    parent_category_id: {
        type: DataTypes.UUID,
        allowNull: true,
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'product_category',
    timestamps: false,
});

export default ProductCategory;
