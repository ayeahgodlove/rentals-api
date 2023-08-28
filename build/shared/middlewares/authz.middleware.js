"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtOptions = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const user_1 = require("../../data/entities/user");
const mapper_1 = require("../../presentation/mappers/mapper");
exports.jwtOptions = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "mysecretekey", // Replace with your actual secret key
};
const roleMapper = new mapper_1.RoleMapper();
passport_1.default.use(new passport_jwt_1.Strategy(exports.jwtOptions, async (jwtPayload, done) => {
    try {
        // Find the user associated with the JWT token
        const user = await user_1.User.findByPk(jwtPayload.id);
        if (user) {
            // If the user exists, return them
            return done(null, user);
        }
        else {
            return done(null, false, { message: "Invalid username or password!" });
        }
    }
    catch (error) {
        return done(error, false, { message: "Invalid username or password!" });
    }
}));
exports.default = passport_1.default;
