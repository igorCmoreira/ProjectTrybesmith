import { Router } from 'express';
import OrderController from '../controllers/orderController';

const router = Router();

const orderController = new OrderController();

router.get('/orders', orderController.getAll);

export default router;
