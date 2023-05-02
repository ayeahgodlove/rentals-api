"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_facebook_1 = require("passport-facebook");
const passport_local_1 = require("passport-local");
const user_1 = require("../../data/entities/user");
const password_validator_1 = require("../../domain/validators/password-validator");
const logger_1 = require("../helper/logger");
const slugify_1 = __importDefault(require("slugify"));
passport_1.default.serializeUser(function (user, cb) {
    cb(null, user);
});
passport_1.default.deserializeUser(async function (userItem, cb) {
    try {
        const user = await user_1.User.findByPk(userItem.id);
        cb(null, user);
    }
    catch (error) {
        cb(error);
    }
});
passport_1.default.use('local-auth', new passport_local_1.Strategy({ usernameField: "email", passwordField: "password" }, async (email, password, done) => {
    try {
        const user = await user_1.User.findOne({ where: { email } });
        if (!user) {
            return done(null, false, { message: 'Invalid username or password!' });
        }
        const isValidPassword = await (0, password_validator_1.validatePassword)(password);
        if (!isValidPassword) {
            return done(null, false, {
                message: "Incorrect email or password",
            });
        }
        return done(null, user);
    }
    catch (error) {
        return done(error);
    }
}));
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_SECRET}`,
    callbackURL: `${process.env.GOOGLE_CALLBACK_URL}`,
    scope: ["profile", "email"],
    state: true,
}, async function (accessToken, refreshToken, profile, cb) {
    console.log("profile: ", profile);
    try {
        logger_1.logger.info("start: ");
        const existingUser = await user_1.User.findOne({
            where: { email: profile.emails[0].value },
        });
        if (existingUser) {
            return cb(null, existingUser);
        }
        const user = await user_1.User.create({
            id: profile.id,
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            username: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            authStrategy: "google",
            address: "",
            phoneNumber: "",
            password: "",
            city: "",
            country: "",
            createdAt: new Date(),
            updatedAt: new Date(),
            whatsappNumber: "",
        });
        console.log("user created: ", user, profile);
        cb(null, user);
    }
    catch (error) {
        return cb(error);
    }
}));
passport_1.default.use(new passport_facebook_1.Strategy({
    clientID: `${process.env.FACEBOOK_CLIENT_ID}`,
    clientSecret: `${process.env.FACEBOOK_SECRET}`,
    callbackURL: `${process.env.FACEBOOK_CALLBACK_URL}`,
    profileFields: ["id", "displayName", "photos", "email"],
    enableProof: true,
}, async function (accessToken, refreshToken, profile, cb) {
    try {
        const existingUser = await user_1.User.findOne({
            where: { email: profile.emails[0].value },
        });
        logger_1.logger.info("profile: ", profile);
        if (existingUser) {
            return cb(null, existingUser);
        }
        logger_1.logger.info("facebook creating new user....");
        const user = await user_1.User.create({
            id: profile.id,
            firstname: `${profile.name.familyName}`,
            lastname: `${profile.name.givenName}`,
            username: (0, slugify_1.default)(profile._json.name, { lower: true, replacement: '-' }),
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            address: '',
            phoneNumber: '',
            authStrategy: "facebook",
            password: "",
            city: '',
            country: '',
            createdAt: new Date(),
            updatedAt: new Date(),
            whatsappNumber: '',
        });
        cb(null, user);
    }
    catch (error) {
        return cb(error);
    }
}));
exports.default = passport_1.default;
