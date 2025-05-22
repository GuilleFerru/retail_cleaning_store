import db from '../models/index.js';

const { InventoryEvent } = db;

const seedInventory = async () => {
    try {
        console.log('🌱 Ejecutando seed de inventario...');

        // Id's de la tabla product_items --> copialos por ahora
        const item1L = '58eb3021-0abc-4002-bd65-81ab57a495f4'; // SKU: CLX-1L
        const item5L = '9fbfe042-cdc3-408c-9a2a-78b95aeb2d8c'; // SKU: CLX-5L

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
