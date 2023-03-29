// src/infrastructure/routes/payment-routes.ts
import { Router } from 'express';
import { PaymentsController  } from '../controllers/payment.controller';

const paymentController = new PaymentsController();

const paymentRouter = Router();

paymentRouter.get('', paymentController.getAll);
paymentRouter.get('/:id', paymentController.getPaymentById);
paymentRouter.post('', paymentController.createPayment);
paymentRouter.put('/:id', paymentController.updatePayment);
paymentRouter.delete('/:id', paymentController.deletePayment);

export default paymentRouter;
