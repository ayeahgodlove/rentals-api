import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import session from "express-session";
import cookieParser from "cookie-parser";

import { PostgresDbConfig } from "./infrastructure/database/postgres/db-postgres.config";
import { errorHandler } from "./shared/middlewares/error.middleware";
import { notFoundHandler } from "./shared/middlewares/not-found.middleware";
import categoryRouter from "./presentation/routes/category.route";
import roleRouter from "./presentation/routes/role.route";
import reviewRouter from "./presentation/routes/review.route";
import { authRoutes } from "./presentation/routes/auth/auth.route";

import Passport from "./shared/middlewares/authz.middleware";
import userRouter from "./presentation/routes/user.route";
import userDocRouter from "./presentation/routes/user-doc.route";
import path from "path";
import tagRouter from "./presentation/routes/tag.route";
import productRouter from "./presentation/routes/product.route";
import storeRouter from "./presentation/routes/store.route";
import branchRouter from "./presentation/routes/branch.route";
import subCategoryRouter from "./presentation/routes/sub-category.route";

dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const db = new PostgresDbConfig();

db.connection()
  .then(() => {
    const app: Express = express();

    /**
     *  App Configuration
     */

    // Serve static files from the public folder
    app.use(express.static("public"));
    app.use(express.static(path.join(__dirname, "public")));

    const corsOptions = {
      origin: "*", // Allow requests from all origins (for development only)
      credentials: true,
    };

    app.use(cors(corsOptions));
    app
      .use(
        express.urlencoded({
          extended: true,
        })
      )
      .use(express.json({ limit: "50kb" }))
      .use(cookieParser())
      .use(helmet())
      .use(
        session({
          // store: store,
          secret: `${process.env.SESSION_SECRET}`,
          resave: false,
          saveUninitialized: false,
          cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
        })
      )
      .use(Passport.initialize())
      .use(Passport.authenticate("session"))
      .use(Passport.session());

    app.use(errorHandler);

    // authentication
    app.use("/auth", authRoutes);

    app.get("/api", (req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
    });

    app.use("/api/categories", categoryRouter);
    app.use("/api/sub-categories", subCategoryRouter);
    app.use("/api/tags", tagRouter);
    app.use("/api/roles", roleRouter);
    app.use("/api/user-documents", userDocRouter);
    app.use("/api/reviews", reviewRouter);
    app.use("/api/users", userRouter);
    app.use("/api/products", productRouter);
    app.use("/api/stores", storeRouter);
    app.use("/api/branches", branchRouter);

    // middleware interceptions
    app.use(notFoundHandler);

    /**
     * Server Activation
     */
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Listening on port ${PORT}`);
    });
  })
  .catch((erro) => {
    console.log("error: ", erro);
  });
