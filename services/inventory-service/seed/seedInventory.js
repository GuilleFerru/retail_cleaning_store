import db from '../models/index.js';

const { InventoryEvent } = db;

const seedInventory = async () => {
    try {
        console.log('🌱 Ejecutando seed de inventario...');

        // 🔁 Reemplazá estos IDs por los reales (copiados de product-service)
        const item1L = '33eae516-15c4-447c-b99a-7ef02791f0b5'; // SKU: CLX-1L
        const item5L = '0d3f705c-6d6b-447f-8522-f6119dec040a'; // SKU: CLX-5L

        await InventoryEvent.bulkCreate([
            {
                product_item_id: item1L,
                type: 'ADD',
                quantity: 10,
                reason: 'Ingreso inicial de lavandina 1L',
            },
            {
                product_item_id: item1L,
                type: 'REMOVE',
                quantity: 3,
                reason: 'Venta',
            },
            {
                product_item_id: item5L,
                type: 'ADD',
                quantity: 5,
                reason: 'Ingreso inicial lavandina 5L',
            },
            {
                product_item_id: item5L,
                type: 'ADJUST',
                quantity: 12,
                reason: 'Ajuste por inventario físico',
            },
        ]);

        console.log('✅ Seed de inventario completado.');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error durante el seed:', err);
        process.exit(1);
    }
};

await db.sequelize.sync(); // asegura que las tablas existan
await seedInventory();
