// src/infrastructure/routes/order-routes.ts
import { Router } from 'express';
import { OrdersController } from '../controllers/order.controller';

const orderController = new OrdersController();

const orderRouter = Router();

orderRouter.get('', orderController.getAll);
orderRouter.get('/:id', orderController.getOrderById);
orderRouter.post('', orderController.createOrder);
orderRouter.put('/:id', orderController.updateOrder);
orderRouter.delete('/:id', orderController.deleteOrder);

export default orderRouter;
