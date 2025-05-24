import db from '../models/index.js';

const { Pricing } = db;

const seedPricing = async () => {
    try {
        console.log('🌱 Ejecutando seed de pricing...');

        // Reemplazá estos con IDs reales de product_item que tengas cargados
        const item1 = 'c24ebe36-68cb-4820-91bd-11b96a03d055'; // por ejemplo: CLX-1L
        const item2 = 'd5186e0a-0638-49e0-ae01-696994552f40'; // por ejemplo: CLX-5L

        await Pricing.bulkCreate([
            {
                product_item_id: item1,
                cost_price: 1000,
                sale_price: 1500,
                tax_rate: 21.00,
                is_tax_included: true
            },
            {
                product_item_id: item2,
                cost_price: 2500,
                sale_price: 4000,
                tax_rate: 21.0,
                is_tax_included: true
            }
        ]);

        console.log('✅ Seed de pricing completado.');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error durante el seed:', error);
        process.exit(1);
    }
};

// Ejecutar sincronización y seed
await db.sequelize.sync();
await seedPricing();
