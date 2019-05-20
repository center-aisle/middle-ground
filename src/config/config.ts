import { passport as pass } from "passport";
import { Strategy as OpenIDConnectStrategy } from "passport-openidconnect";
import ensureLoggedIn from "connect-ensure-login";
    
import "../controllers";
import User from "../models/User";
import express from "express";
const router = express.Router();

pass.use(new OpenIDConnectStrategy({
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
    User.findOrCreate({ // this method might be a problem
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
    passport.authenticate("openidconnect", {
        session: true,
        successRedirect: "/user/account",
        failureRedirect: "/" 
    })
);

router.get("/user/account",
    ensureLoggedIn("/user"),
    function(req, res) {
        res.render("/user/account", { user: req.user });
    }
);

pass.serializeUser((
    user: any,
    done: (
        arg0: any,
        arg1: any
    ) => void) => {
        done(null, user.id);
    }
);
    
pass.deserializeUser((
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

router.get("/logout", function (req, res) {
    req.session.destroy(() => res.redirect("/"));
});

module.exports = { pass, router };