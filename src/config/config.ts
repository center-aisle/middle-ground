import passport from "passport";
import { Strategy as OpenIDStrategy } from "passport-openid";
    
import "../controllers";
import User from "../models/User";
import { Router as router } from "express";

const login = () => {

    passport.use(new OpenIDStrategy({
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
        ) => void) => {

            User.findOrCreate({
                openId: identifier,
                firstName: profile.givenName,
                lastName: profile.familyName,
                email: profile.emails[0].value // takes first email if there's more than one
            }, (err: any, user: any) => {
                done(err, user);
            });
    }));

    router.post("/auth/openid", passport.authenticate("openid"));

    router.get("/auth/openid/return",
        passport.authenticate("openid", {
            successRedirect: "/user",
            failureRedirect: "/" 
        })
    );
}

export = login;