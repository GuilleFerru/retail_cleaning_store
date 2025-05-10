import sequelize from '../config/db.js';

import Product from './Product.js';
import ProductCategory from './ProductCategory.js';
import Variation from './Variation.js';
import VariationOption from './VariationOption.js';
import ProductItem from './ProductItem.js';
import ProductConfiguration from './ProductConfiguration.js';

// Relaciones

// Categorías
Product.belongsTo(ProductCategory, { foreignKey: 'category_id' });
ProductCategory.hasMany(Product, { foreignKey: 'category_id' });

// Variaciones por categoría
Variation.belongsTo(ProductCategory, { foreignKey: 'category_id' });
ProductCategory.hasMany(Variation, { foreignKey: 'category_id' });

// Opciones por variación
VariationOption.belongsTo(Variation, { foreignKey: 'variation_id' });
Variation.hasMany(VariationOption, { foreignKey: 'variation_id' });

// SKU por producto
ProductItem.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(ProductItem, { foreignKey: 'product_id' });

// Configuración: SKU + opciones
ProductConfiguration.belongsTo(ProductItem, { foreignKey: 'product_item_id' });
ProductConfiguration.belongsTo(VariationOption, { foreignKey: 'variation_option_id' });

// Relación autorreferente para jerarquía de categorías
ProductCategory.hasMany(ProductCategory, {
  as: 'subcategories',
  foreignKey: 'parent_category_id',
});
ProductCategory.belongsTo(ProductCategory, {
  as: 'parent',
  foreignKey: 'parent_category_id',
});

// Exportar todos juntos
const db = {
  sequelize,
  Product,
  ProductCategory,
  Variation,
  VariationOption,
  ProductItem,
  ProductConfiguration
};

export default db;
