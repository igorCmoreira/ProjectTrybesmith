import express from 'express';
import ProductsRoutes from './Routes/productsRotes';
import UserRoutes from './Routes/usersRoutes';

const app = express();

app.use(express.json());
app.use(ProductsRoutes);
app.use(UserRoutes);

export default app;
