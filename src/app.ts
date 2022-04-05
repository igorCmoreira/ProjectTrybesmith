import express from 'express';
import ProductsRoutes from './Routes/productsRotes';
import UserRoutes from './Routes/usersRoutes';
import OrderRoutes from './Routes/ordersRoutes';

const app = express();

app.use(express.json());
app.use(ProductsRoutes);
app.use(UserRoutes);
app.use(OrderRoutes);

export default app;
