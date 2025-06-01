// app.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { register } from './metrics/metrics.js';
import orderRoutes from './routes/orderRoutes.js';



dotenv.config();

const app = express();
app.use(bodyParser.json());

// Rutas del dominio
app.use('/', orderRoutes)


// Ruta para Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

export default app;
