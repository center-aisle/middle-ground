import dotenv from "dotenv";
import Passport from "passport";
import { Issuer, Strategy, generators } from "openid-client";
import User from "../models/User";

dotenv.config();

const googleIssuer = new Issuer("https://accounts.google.com/.well-known/openid-configuration");
const googleClient = googleIssuer.Client;

const params = {
        client_id: process.env.GOOGLE_ID,
        client_secret: process.env.GOOGLE_SECRET,
        response_type: "code token id_token",
        scope: "openid profile email",
        nonce: generators.nonce(),
        redirect_uri: "https://bipartisan.herokuapp.com/user/account",
        state: generators.state(),
        prompt: "select_account consent",
        display: "popup",
        login_hint: "sub"
    };

const options = {
    googleClient,
    params
};

const verify = ( tokenSet: any, userInfo: any, done: (arg0: null, arg1: any) => void ) => {
    console.log("USERINFO: ", userInfo);
    console.log("TOKENSET: ", tokenSet);
    return done(null, tokenSet);
};

Passport.use("oidc", new Strategy( options, verify ));

// (
//     openid: any,
//     profile: { 
//         givenName: any;
//         familyName: any
//     }, 
//     email: any,
//     password: any,
//     done: (
//         arg0: any,
//         arg1: any
//     ) => void
// ) => {
//     console.log("IDENTIFIER: ", openid);
//     User.findOrCreate({ // this method might be a problem
//         openId: openid,
//         firstName: profile.givenName,
//         lastName: profile.familyName,
//         email: email // takes first email if there's more than one
//     }, (err: any, user: any) => {
//         if (err) { 
//             done(err, user);
//         };
//         if (!user) {
//             done(null, false);
//         };
//         if (!user.validPassword(password)) {
//             done(null, false);
//         };
//         done(null, user);
   
//     });
// }));

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
