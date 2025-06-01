import db from '../models/index.js';
import { orderSeeds } from './orderSeed.js';

const seedDatabase = async () => {
    try {
        // Sincronizar la base de datos
        await db.sequelize.sync();

        // Insertar los seeds
        await db.Order.bulkCreate(orderSeeds);

        console.log('✅ Seeds insertados correctamente');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error al insertar seeds:', error);
        process.exit(1);
    }
};

seedDatabase();
