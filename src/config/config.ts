import passport from "passport";
import { Strategy as OpenIDStrategy } from "passport-openid";
    
import controller from "../controllers";
import User from "../models";
import { Router as routes } from "express";


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
            email: profile.emails[0].value
        }, (err: any, user: any) => {
            done(err, user);
        });
}));

routes.post("/auth/openid", passport.authenticate("openid"));

routes.get("/auth/openid/return",
	passport.authenticate("openid", {
		successRedirect: "/user",
		failureRedirect: "/" 
	})
);