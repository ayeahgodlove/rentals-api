// src/middleware/authz.middleware.ts

// import { expressjwt } from "express-jwt";
// import jwksRsa from "jwks-rsa";
import { auth } from 'express-oauth2-jwt-bearer';
import * as dotenv from "dotenv";

dotenv.config();

export const checkJwt = auth({
  audience: 'https://www.honeyman-api.com',
  issuerBaseURL: 'https://dev-78podwfm.us.auth0.com/',
  tokenSigningAlg: 'RS256',
});
// export const checkJwt = expressjwt({
//   secret: jwksRsa.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: 'https://dev-78podwfm.us.auth0.com/.well-known/jwks.json'
// }) as any,
// audience: 'https://www.honeyman-api.com',
// issuer: 'https://dev-78podwfm.us.auth0.com/',
// algorithms: ['RS256']
// });