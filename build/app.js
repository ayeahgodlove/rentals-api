"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_postgres_config_1 = require("./infrastructure/database/postgres/db-postgres.config");
const error_middleware_1 = require("./shared/middlewares/error.middleware");
const not_found_middleware_1 = require("./shared/middlewares/not-found.middleware");
const authz_middleware_1 = require("./shared/middlewares/authz.middleware");
const category_route_1 = __importDefault(require("./presentation/routes/category.route"));
const role_route_1 = __importDefault(require("./presentation/routes/role.route"));
const review_route_1 = __importDefault(require("./presentation/routes/review.route"));
dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const app = (0, express_1.default)();
/**
 *  App Configuration
 */
// enable the use of request body parsing middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: "*",
    credentials: true,
}));
app.use((0, express_session_1.default)({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
const db = new db_postgres_config_1.PostgresDbConfig();
db.connection();
//routes
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });
app.get("/api", (req, res) => {
    res.send("Express + TypeScript Server");
});
// const checkScopes = requiredScopes('read:messages');
app.get("/api/private-scoped", (0, authz_middleware_1.checkScopes)(["read:messages", "read:products"]), function (req, res) {
    res.json({
        message: "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.",
    });
});
app.use("/api/categories", category_route_1.default);
app.use("/api/roles", role_route_1.default);
app.use("/api/reviews", review_route_1.default);
app.get("/api/private", authz_middleware_1.checkJwt, (req, res) => {
    res.send("This is a private route, authenicate before you can see it");
});
// middleware interceptions
app.use(error_middleware_1.errorHandler);
app.use(not_found_middleware_1.notFoundHandler);
/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`⚡️[server]: Listening on port ${PORT}`);
});
