// app.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { register } from './metrics/metrics.js';


dotenv.config();

const app = express();
app.use(bodyParser.json());

// Rutas del dominio


// Ruta para Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

export default app;
