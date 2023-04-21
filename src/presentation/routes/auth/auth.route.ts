// src/infrastructure/routes/category-routes.ts
import { Router } from "express";
import { passport } from "../../../shared/middlewares/authz.middleware";

const authRoutes = Router();

// redirect to google sign in page
authRoutes.get(
  "/oauth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

//redirect user to the success or failure page from google sign in page
authRoutes.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  (req, res) => {
    res.redirect("/api");
  }
);
//redirect user to facebook login page
authRoutes.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["public_profile", "email"],
  })
);

//redirect user from facebook login page to success or failure login page
authRoutes.get(
  "/oauth2/redirect/facebook",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  (req, res) => {
    res.redirect("/api");
  }
);
// console.log(authRoutes)

export { authRoutes };
