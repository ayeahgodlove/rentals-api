import Passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as LocalStrategy } from "passport-local";

import { User } from "../../data/entities/user";
import { validatePassword } from "../../domain/validators/password-validator";
import { logger } from "../helper/logger";
import slugify from "slugify";

Passport.serializeUser(function (user, cb) {
  cb(null, user);
});

Passport.deserializeUser(async function (userItem: any, cb) {
  try {
    const user = await User.findByPk(userItem.id);
    cb(null, user);
  } catch (error) {
    cb(error);
  }
});

Passport.use(
  'local-auth',
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          return done(null, false, {message: 'Invalid username or password!'});
        }
        const isValidPassword = await validatePassword(password);
        if (!isValidPassword) {
          return done(null, false, {
            message: "Incorrect email or password",
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

Passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`,
      callbackURL: `${process.env.GOOGLE_CALLBACK_URL}`,
      scope: ["profile", "email"],
      state: true,
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log("profile: ", profile);
      try {
        logger.info("start: ");
        const existingUser = await User.findOne({
          where: { email: profile.emails![0].value},
        });

        if (existingUser) {
          return cb(null, existingUser);
        }

        const user = await User.create({
          id: profile.id,
          firstname: profile.name!.givenName,
          lastname: profile.name!.familyName,
          username: profile.displayName,
          email: profile.emails![0].value,
          avatar: profile.photos![0].value,
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
      } catch (error: any) {
        return cb(error);
      }
    }
  )
);

Passport.use(
  new FacebookStrategy(
    {
      clientID: `${process.env.FACEBOOK_CLIENT_ID}`,
      clientSecret: `${process.env.FACEBOOK_SECRET}`,
      callbackURL: `${process.env.FACEBOOK_CALLBACK_URL}`,
      profileFields: ["id", "displayName", "photos", "email"],
      enableProof: true,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        const existingUser = await User.findOne({
          where: { email: profile.emails![0].value},
        });
        logger.info("profile: ", profile);

        if (existingUser) {
          return cb(null, existingUser);
        }
        logger.info("facebook creating new user....");

        const user = await User.create({
          id: profile.id,
          firstname: `${profile.name!.familyName}`,
          lastname: `${profile.name!.givenName}`,
          username: slugify(profile._json.name, { lower: true, replacement: '-' }),
          email: profile.emails![0].value,
          avatar: profile.photos![0].value,
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
      } catch (error: any) {
        return cb(error);
      }
    }
  )
);

export default Passport;
