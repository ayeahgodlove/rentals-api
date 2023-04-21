"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/role-routes.ts
const express_1 = require("express");
const role_controller_1 = require("../controllers/role.controller");
const roleController = new role_controller_1.RolesController();
const roleRouter = (0, express_1.Router)();
roleRouter.get("", roleController.getAll);
roleRouter.get("/:id", roleController.getRoleById);
roleRouter.post("", roleController.createRole);
roleRouter.put("/:id", roleController.updateRole);
roleRouter.delete("/:id", roleController.deleteRole);
exports.default = roleRouter;
