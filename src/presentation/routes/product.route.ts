// src/infrastructure/routes/product-routes.ts
import { Router } from 'express';
import { ProductsController  } from '../controllers/product.controller';

const productController = new ProductsController();

const productRouter = Router();

productRouter.get('', productController.getAll);
productRouter.get('/:id', productController.getProductById);
productRouter.post('', productController.createProduct);
productRouter.put('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;
