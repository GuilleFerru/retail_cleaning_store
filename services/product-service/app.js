// app.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { register } from './metrics/metrics.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import variationRoutes from './routes/variationRoutes.js'; // Asumiendo que tienes un archivo de rutas para variaciones

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Rutas del dominio
app.use('/', productRoutes);
app.use('/', categoryRoutes);
app.use('/', variationRoutes); // Asumiendo que las variantes son parte de los productos


// Ruta para Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

export default app;
