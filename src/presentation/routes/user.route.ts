// src/infrastructure/routes/user-routes.ts
import { Router } from "express";
import { UsersController } from "../controllers/user.controller";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";

const userController = new UsersController();

const userRouter = Router();

userRouter.get("", isAuthenticatedMiddleware, userController.getAll);
userRouter.get("/me", isAuthenticatedMiddleware, (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      message: "Success",
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failure!",
      success: false,
      errors: error.message,
    });
  }
});
userRouter.put("/:id", isAuthenticatedMiddleware, userController.updateUser);
userRouter.delete("/:id", isAuthenticatedMiddleware, userController.deleteUser);

export default userRouter;
