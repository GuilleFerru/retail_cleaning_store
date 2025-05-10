import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const InventoryEvent = sequelize.define('InventoryEvent', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    product_item_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('ADD', 'REMOVE', 'ADJUST'),
        allowNull: false,
    },
    quantity: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'inventory_event',
    timestamps: false,
});

export default InventoryEvent;
