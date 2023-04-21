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
import { passport } from "./shared/middlewares/authz.middleware";
import { authRoutes } from "./presentation/routes/auth/auth.route";

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

app
  .use(
    express.urlencoded({
      extended: true,
    })
  )
  .use(express.json({ limit: "50kb" }))
  .use(
    cors({
      origin: "*",
      credentials: true,
    })
  )
  .use(cookieParser())
  .use(helmet())
  .use(
    session({
      secret: `${process.env.SESSION_SECRET}}`,
      resave: true,
      saveUninitialized: true,
    })
  )
  .use(passport.initialize())
  .use(passport.authenticate("session"))
  .use(passport.session());

const db = new PostgresDbConfig();
db.connection();


// route  endpoints
app.get('/', (req: Request, res: Response) => {
  res.send("Welcome to Rent Kojo REST API");
});
app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// authentication
app.use('/', authRoutes);


app.use("/api/categories", categoryRouter);
app.use("/api/roles", roleRouter);
app.use("/api/reviews", reviewRouter);

// middleware interceptions
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`⚡️[server]: Listening on port ${PORT}`);
});
