import db from '../models/index.js';

const { InventoryEvent } = db;

const seedInventory = async () => {
    try {
        console.log('🌱 Ejecutando seed de inventario...');

        // Id's de la tabla product_items --> copialos por ahora
        const item1L = 'c24ebe36-68cb-4820-91bd-11b96a03d055'; // SKU: CLX-1L
        const item5L = 'd5186e0a-0638-49e0-ae01-696994552f40'; // SKU: CLX-5L

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
