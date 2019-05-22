import Passport from "passport";
// import Strategy from "passport-openidconnect";
import Strategy from "openid-client";
import rn from "random-number";
import User from "../models/User";
import { Code } from "bson";

Passport.use(new Strategy({
    client: "https://accounts.google.com",
    params: {
        client_id: process.env.OAUTH_ID,
        response_type: "code",
        scope: "openid profile email",
        nonce: 24857924857,
        redirect_uri: "https://bipartisan.herokuapp.com/user/account",
        state: 93847593847593845,
        prompt: "select_account consent",
        display: "popup",
        login_hint: "sub",
        realm: "https://bipartisan.herokuapp.com/"
    }

    // client_id: process.env.OAUTH_ID,
    // response_type: "code",
    // scope: "openid email profile",
    // state: ,
    // nonce: ,
    // openid.realm: "https://bipartisan.herokuapp.com/",
    // issuer: "https://accounts.google.com",
    // redirect_uri: "https://bipartisan.herokuapp.com/user/account",    
    // authorizationURL: "https://accounts.google.com/o/oauth2/v2/auth",
    // tokenURL: "https://oauth2.googleapis.com/token",
    // userInfoURL: "https://openidconnect.googleapis.com/v1/userinfo",
    // clientID: process.env.OAUTH_ID,
    // clientSecret: process.env.OAUTH_SECRET,
    // profile: true,
    // scope: "openid email profile",
    // prompt: "select_account",
    // nonce: 12345678910
}, (
    openid: any,
    profile: { 
        givenName: any;
        familyName: any
    }, 
    email: any,
    password: any,
    done: (
        arg0: any,
        arg1: any
    ) => void
) => {
    console.log("IDENTIFIER: ", openid);
    User.findOrCreate({ // this method might be a problem
        openId: openid,
        firstName: profile.givenName,
        lastName: profile.familyName,
        email: email // takes first email if there's more than one
    }, (err: any, user: any) => {
        if (err) { 
            return done(err, user);
        };
        if (!user) {
          return done(null, false);
        };
        if (!user.validPassword(password)) {
          return done(null, false);
        };
        return done(null, user);
   
    });
}));

// start session
Passport.serializeUser((
    user: any,
    done: (
        arg0: any,
        arg1: any
    ) => void) => {
        console.log("SERIALIZED USER: ", user.id);
        done(null, user.id);
    }
);

// end session
Passport.deserializeUser((
    id: any,
    done: (
        arg0: any,
        arg1: any
    ) => void) => {
        User.findById(id, (err: any, user: any) => {
            console.log("DESERIALIZED USER: ", user);
            done(err, user);
        });
    }
);

export default Passport;
