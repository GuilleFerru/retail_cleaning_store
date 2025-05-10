import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const InventorySnapshot = sequelize.define('InventorySnapshot', {
    product_item_id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    current_stock: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'inventory_snapshot',
    timestamps: false,
});

export default InventorySnapshot;
