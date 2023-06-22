// src/infrastructure/routes/store-routes.ts
import { Router } from "express";
import { StoresController } from "../controllers/store.controller";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";

const storeController = new StoresController();

const storeRouter = Router();

storeRouter.get("", isAuthenticatedMiddleware, storeController.getAll);
storeRouter.get("/:id", isAuthenticatedMiddleware, storeController.getStoreById);
storeRouter.post("", isAuthenticatedMiddleware, storeController.createStore);
storeRouter.put("/:id", isAuthenticatedMiddleware, storeController.updateStore);
storeRouter.delete("/:id", isAuthenticatedMiddleware, storeController.deleteStore);

export default storeRouter;
