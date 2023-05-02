"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
// src/infrastructure/routes/category-routes.ts
const express_1 = require("express");
const authz_middleware_1 = __importDefault(require("../../../shared/middlewares/authz.middleware"));
const authRoutes = (0, express_1.Router)();
exports.authRoutes = authRoutes;
// redirect to google sign in page
authRoutes.get("/oauth/google", authz_middleware_1.default.authenticate("google", {
    scope: ["profile", "email"],
}));
//redirect user to the success or failure page from google sign in page
authRoutes.get("/oauth2/redirect/google", authz_middleware_1.default.authenticate("google", {
    failureRedirect: "/auth/failure",
    failureMessage: true,
}), (req, res) => {
    res.redirect("http://localhost:3000/");
});
//redirect user to facebook login page
authRoutes.get("/auth/facebook", authz_middleware_1.default.authenticate("facebook", {
    scope: ["public_profile", "email"],
}));
//redirect user from facebook login page to success or failure login page
authRoutes.get("/oauth2/redirect/facebook", authz_middleware_1.default.authenticate("facebook", {
    failureRedirect: "/auth/failure",
    failureMessage: true,
}), (req, res) => {
    res.redirect("http://localhost:3000/");
});
// console.log(authRoutes)
authRoutes.post("/auth/login", authz_middleware_1.default.authenticate("local-auth"), (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Login Successfully!",
            data: req.user
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Login Failed",
        });
    }
});
authRoutes.get("/auth/failure", (req, res) => {
    res.json({
        message: "failure!",
        success: false,
    });
});
authRoutes.get("/auth/logout", (req, res) => {
    req.logout(() => {
        res.send("Logged out successfully!");
    });
});
