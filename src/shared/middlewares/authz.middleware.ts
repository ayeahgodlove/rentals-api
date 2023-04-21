import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as LocalStrategy } from "passport-local";

import { IUser } from "../../domain/models/user";
import { User } from "../../data/entities/user";
import { validatePassword } from "../../domain/validators/password-validator";

// serialize user
passport.serializeUser<IUser>((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email: string, password: string, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          return done(null, false);
        }
        const isValidPassword = await validatePassword(password);
        if (!isValidPassword) {
          return done(null, false, { message: "Incorrect email or password" });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      callbackURL: `${process.env.GOOGLE_CALLBACK_URL}`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const [user] = await User.findOrCreate({
          where: { email: profile.emails![0].value },
          defaults: {
            id: profile.id,
            firstname: profile.name!.givenName,
            lastname: profile.name!.familyName,
            username: profile.displayName,
            email: profile.emails![0].value,
            avatar: profile.photos![0].value,
            address: "",
            phoneNumber: "",
            password: "",
            city: "",
            country: "",
            createdAt: new Date(),
            updatedAt: new Date(),
            whatsappNumber: "",
          },
        });
        done(null, user);
      } catch (error: any) {
        return done(error);
      }
    }
  )
);

// facebook strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: `${process.env.FACEBOOK_CLIENT_ID}`,
      clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
      callbackURL: `${process.env.FACEBOOK_CALLBACK_URL}`,
      profileFields: ["id", "displayName", "photos", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      try {
        const [user] = await User.findOrCreate({
          where: { email: profile.emails![0].value },
          defaults: {
            id: profile.id,
            firstname: profile.name!.familyName,
            lastname: profile.name!.givenName,
            username: profile.displayName,
            email: profile.emails![0].value,
            avatar: profile.photos![0].value,
            address: profile._json.location.address,
            phoneNumber: profile._json.phone,
            password: "",
            city: profile._json.location.name,
            country: profile._json.location.country,
            createdAt: new Date(),
            updatedAt: new Date(),
            whatsappNumber: profile._json.phone,
          },
        });
        done(null, user);
      } catch (error: any) {
        return done(error);
      }
    }
  )
);

export { passport };