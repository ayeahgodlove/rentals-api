// src/infrastructure/routes/store-routes.ts
import { Router } from "express";
import { StoresController } from "../controllers/store.controller";
import { isAuthenticatedMiddleware } from "../../shared/middlewares/is-authenticated.middleware";
import multer from "multer";
import { fileFilter } from "../../shared/helper/multer.config";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/uploads/stores");
    },
    filename: (req, file, cb) => {
      const originalname = file.originalname;
      const filename = `${Date.now()}-${originalname
        .replace(/\s+/g, "")
        .toLowerCase()}`;
      cb(null, filename);
    },
  });
  
  const multerInstance = multer({
    storage: storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
  });

  
const storeController = new StoresController();

const storeRouter = Router();

storeRouter.get("", storeController.getAll);
storeRouter.get("/:id", storeController.getStoreById);
storeRouter.post("", isAuthenticatedMiddleware,  multerInstance.single("imageBannerUrl"), storeController.createStore);
storeRouter.put("/:id", isAuthenticatedMiddleware, storeController.updateStore);
storeRouter.delete("/:id", isAuthenticatedMiddleware, storeController.deleteStore);

export default storeRouter;
