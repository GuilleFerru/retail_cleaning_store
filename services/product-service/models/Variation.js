// models/Variation.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Variation = sequelize.define('Variation', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  category_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'variation',
  timestamps: false,
});

export default Variation;
