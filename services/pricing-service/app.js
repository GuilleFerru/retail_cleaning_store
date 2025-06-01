// app.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { register } from './metrics/metrics.js';
import pricingRoutes from './routes/pricingRoutes.js'; // Asumiendo que tienes un archivo de rutas para precios


dotenv.config();

const app = express();
app.use(bodyParser.json());

// Rutas del dominio
app.use('/', pricingRoutes)


// Ruta para Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

export default app;
