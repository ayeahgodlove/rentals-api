import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";

import { PostgresDbConfig } from "./infrastructure/database/postgres/db-postgres.config";
import { errorHandler } from "./shared/middlewares/error.middleware";
import { notFoundHandler } from "./shared/middlewares/not-found.middleware";
import { checkJwt, checkScopes } from "./shared/middlewares/authz.middleware";
import categoryRouter from "./presentation/routes/category.route";
import roleRouter from "./presentation/routes/role.route";
import reviewRouter from "./presentation/routes/review.route";

dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app: Express = express();

/**
 *  App Configuration
 */
// enable the use of request body parsing middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(helmet());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

const db = new PostgresDbConfig();
db.connection();

//routes
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });
app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/categories", categoryRouter);
app.use("/api/roles", roleRouter);
app.use("/api/reviews", reviewRouter);

// redirect to google sign in page
app.get(
  "/oauth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

//redirect user to the success or failure page from google sign in page
app.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/success",
  })
);
//redirect user to facebook login page
app.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["public_profile", "email"],
  })
);

//redirect user from facebook login page to success or failure login page
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/failure",
    successRedirect: "/success",
  })
);
// middleware interceptions
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`⚡️[server]: Listening on port ${PORT}`);
});
