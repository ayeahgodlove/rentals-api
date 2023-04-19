// src/infrastructure/routes/role-routes.ts
import { Router } from "express";
import { RolesController } from "../controllers/role.controller";

const roleController = new RolesController();

const roleRouter = Router();

roleRouter.get("", roleController.getAll);
roleRouter.get("/:id", roleController.getRoleById);
roleRouter.post("", roleController.createRole);
roleRouter.put("/:id", roleController.updateRole);
roleRouter.delete("/:id", roleController.deleteRole);

export default roleRouter;
