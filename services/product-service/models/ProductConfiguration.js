// models/ProductConfiguration.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const ProductConfiguration = sequelize.define('ProductConfiguration', {
    product_item_id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    variation_option_id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
}, {
    tableName: 'product_configuration',
    timestamps: false,
});

export default ProductConfiguration;
