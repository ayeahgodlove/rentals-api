// src/infrastructure/routes/category-routes.ts
import { Router } from "express";
const  Passport = require("../../../shared/middlewares/authz.middleware");

const authRoutes = Router();
// redirect to google sign in page
authRoutes.get(
  "/oauth/google",
  Passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

//redirect user to the success or failure page from google sign in page
authRoutes.get(
  "/oauth2/redirect/google",
  Passport.authenticate("google", {
    failureRedirect: "/failure",
    failureMessage: true,
    
  }),
  (req, res) => {
    res.redirect("/api");
  }
);
//redirect user to facebook login page
authRoutes.get(
  "/auth/facebook",
  Passport.authenticate("facebook", {
    scope: ["public_profile", "email"],
  })
);

//redirect user from facebook login page to success or failure login page
authRoutes.get(
  "/oauth2/redirect/facebook",
  Passport.authenticate("facebook", {
    failureRedirect: "/failure",
    failureMessage: true,
  }),
  (req, res) => {
    res.redirect("/api");
  }
);
// console.log(authRoutes)

authRoutes.get("/failure", (req, res) => {  
  res.json({
    message: "failure!",
    success: false,
    user: req.user,
    test: req.authInfo,
    res: req.session
  });
});

export { authRoutes };
