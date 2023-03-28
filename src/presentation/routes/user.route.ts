// src/infrastructure/routes/user-routes.ts
import { Router } from 'express';
import { UsersController  } from '../controllers/user.controller';

const userController = new UsersController();

const userRouter = Router();

userRouter.get('', userController.getAll);
userRouter.get('/:id', userController.getUserById);
userRouter.post('', userController.createUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;
