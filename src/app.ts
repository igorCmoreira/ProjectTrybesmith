import express from 'express';
import ProductsRoutes from './Routes/productsRotes';

const app = express();

app.use(express.json());
app.use(ProductsRoutes);

export default app;
