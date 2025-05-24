import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';

const Pricing = sequelize.define('Pricing', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    product_item_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    cost_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    sale_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    tax_rate: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 21.00
    },
    is_tax_include: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    tableName: 'pricing',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
export default Pricing;

