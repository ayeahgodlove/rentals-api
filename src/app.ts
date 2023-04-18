import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";

import { PostgresDbConfig } from "./infrastructure/database/postgres/db-postgres.config";
import { errorHandler } from "./shared/middlewares/error.middleware";
import { notFoundHandler } from "./shared/middlewares/not-found.middleware";
import { checkJwt, checkScopes } from "./shared/middlewares/authz.middleware";
import categoryRouter from "./presentation/routes/category.route";
import userRouter from "./presentation/routes/user.route";
import reviewRouter from "./presentation/routes/review.route";
import { requiredScopes } from "express-oauth2-jwt-bearer";

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
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
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

const db = new PostgresDbConfig();
db.connection();

//routes
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });
app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// const checkScopes = requiredScopes('read:messages');
app.get("/api/private-scoped", checkScopes(["read:messages","read:products"]), function (req, res) {
  res.json({
    message:
      "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.",
  });
});


app.use("/api/categories",categoryRouter);
app.use("/api/users", checkJwt, userRouter);
app.use("/api/reviews", checkJwt, reviewRouter);

app.get("/api/private", checkJwt, (req, res) => {
  res.send("This is a private route, authenicate before you can see it");
});

// middleware interceptions
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`⚡️[server]: Listening on port ${PORT}`);
});
