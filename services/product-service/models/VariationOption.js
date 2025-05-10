// models/VariationOption.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const VariationOption = sequelize.define('VariationOption', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    variation_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'variation_option',
    timestamps: false,
});

export default VariationOption;
