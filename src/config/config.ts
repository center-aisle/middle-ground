import passport from "passport";
import { Strategy as OpenIDConnectStrategy } from "passport-openidconnect";
    
import "../controllers";
import User from "../models/User";
import express from "express";
const router = express.Router();

const login = () => {

    passport.use(new OpenIDConnectStrategy({
        returnURL: "https://bipartisan.herokuapp.com/user",
        realm: "https://bipartisan.herokuapp.com/",
        profile: true
    }, (
        identifier: any,
        profile: { 
            givenName: any;
            familyName: any;
            emails: { 
                value: any;
            }[];
        }, done: (
            arg0: any,
            arg1: any
        ) => void
    ) => {
        User.findOne({ // why is the plugin findOrCreate not working
            openId: identifier,
            firstName: profile.givenName,
            lastName: profile.familyName,
            email: profile.emails[0].value // takes first email if there's more than one
        }, (err: any, user: any) => {
            done(err, user);
        });
    }));

    router.post("/auth/openid", passport.authenticate("openidconnect"));

    router.get("/auth/openid/return",
        passport.authenticate("openid", {
            successRedirect: "/user",
            failureRedirect: "/" 
        })
    );

    passport.serializeUser((
        user: any,
        done: (
            arg0: any,
            arg1: any
        ) => void) => {
            done(null, user.id);
        }
    );
      
    passport.deserializeUser((
        id: any,
        done: (
            arg0: any,
            arg1: any
        ) => void) => {
            User.findById(id, (err: any, user: any) => {
            done(err, user);
            });
        }
    );
}

export default login;