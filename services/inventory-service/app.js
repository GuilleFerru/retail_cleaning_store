import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

import inventoryRoutes from './routes/inventoryRoutes.js';

const app = express();

app.use(bodyParser.json());

// Rutas principales
app.use('/', inventoryRoutes);

export default app;
