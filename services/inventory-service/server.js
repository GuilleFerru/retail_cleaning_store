// server.js
import app from './app.js';
import db from './models/index.js';

const port = process.env.PORT || 3002;

const startServer = async () => {
    try {
        await db.sequelize.authenticate();
        console.log('✅ Connected to database');

        await db.sequelize.sync();
        console.log('✅ Tables synced');

        app.listen(port, () => {
            console.log(`🚀 Inventory service listening at http://localhost:${port}`);
        });

    } catch (err) {
        console.error('❌ Failed to start inventory service:', err);
    }
};

startServer();
