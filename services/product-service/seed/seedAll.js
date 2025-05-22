import db from '../models/index.js';

const {
    Product,
    ProductCategory,
    Variation,
    VariationOption,
    ProductItem,
    ProductConfiguration
} = db;

const seedAll = async () => {
    try {
        console.log('🌱 Iniciando seed general...');

        // Categorías
        const limpieza = await ProductCategory.create({ category_name: 'Limpieza' });
        const lavandinas = await ProductCategory.create({ category_name: 'Lavandinas', parent_category_id: limpieza.id });
        const jabones = await ProductCategory.create({ category_name: 'Jabones', parent_category_id: limpieza.id });

        const ferreteria = await ProductCategory.create({ category_name: 'Ferretería' });
        const herramientas = await ProductCategory.create({ category_name: 'Herramientas', parent_category_id: ferreteria.id });

        // Variaciones para Lavandinas
        const tamaño = await Variation.create({ name: 'Tamaño', category_id: lavandinas.id });
        const variedadJabón = await Variation.create({ name: 'Variedad', category_id: jabones.id });

        // Opciones para esa variación
        const chico = await VariationOption.create({ value: '1L', variation_id: tamaño.id });
        const grande = await VariationOption.create({ value: '5L', variation_id: tamaño.id });
        const jabonLiquido = await VariationOption.create({ value: 'Jabón Líquido', variation_id: variedadJabón.id });

        // Producto base
        const producto = await Product.create({
            name: 'Lavandina Clorox',
            description: 'Lavandina a base de cloro para desinfección',
            category_id: lavandinas.id,
            product_image: 'https://example.com/lavandina.png'
        });

        // SKUs (uno por variación)
        const itemChico = await ProductItem.create({
            sku: 'CLX-1L',
            product_id: producto.id,
            product_image: 'https://example.com/lavandina-1L.png'
        });

        const itemGrande = await ProductItem.create({
            sku: 'CLX-5L',
            product_id: producto.id,
            product_image: 'https://example.com/lavandina-5L.png'
        });

        // Configuración de variaciones por SKU
        await ProductConfiguration.bulkCreate([
            {
                product_item_id: itemChico.id,
                variation_option_id: chico.id
            },
            {
                product_item_id: itemGrande.id,
                variation_option_id: grande.id
            }
        ]);

        console.log('✅ Seed completo ejecutado con éxito.');
        process.exit(0);

    } catch (err) {
        console.error('❌ Error durante el seed:', err);
        process.exit(1);
    }
};

await db.sequelize.sync(); // asegura que las tablas existan
await seedAll();
