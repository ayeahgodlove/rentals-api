"use strict";
// src/middleware/authz.middleware.ts
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
exports.checkScopes = exports.checkJwt = void 0;
const express_jwt_1 = require("express-jwt");
const jwks_rsa_1 = __importDefault(require("jwks-rsa"));
const express_jwt_authz_1 = __importDefault(require("express-jwt-authz"));
// import { auth,requiredScopes } from 'express-oauth2-jwt-bearer';
const dotenv = __importStar(require("dotenv"));
dotenv.config();
// export const checkJwt = auth({
//   audience: 'https://www.honeyman-api.com',
//   issuerBaseURL: 'https://dev-78podwfm.us.auth0.com/',
//   tokenSigningAlg: 'RS256',
// });
exports.checkJwt = (0, express_jwt_1.expressjwt)({
    secret: jwks_rsa_1.default.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 25,
        jwksUri: 'https://dev-78podwfm.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://www.honeyman-api.com',
    issuer: 'https://dev-78podwfm.us.auth0.com/',
    algorithms: ['RS256']
});
const checkScopes = (permissions) => {
    console.log("permissions: ", permissions);
    return (0, express_jwt_authz_1.default)(permissions);
};
exports.checkScopes = checkScopes;
