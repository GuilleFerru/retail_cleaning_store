import app from './app.js';
import db from './models/index.js';

const port = process.env.PORT || 3003;

const startServer = async () => {
    try {
        await db.sequelize.authenticate();
        console.log('✅ Connected to DB');

        await db.sequelize.sync();
        console.log('✅ Tables synced');

        app.listen(port, () => {
            console.log(`🚀 Pricing service listening at http://localhost:${port}`);
        });

    } catch (err) {
        console.error('❌ Failed to start service:', err);
    }
};

startServer();
