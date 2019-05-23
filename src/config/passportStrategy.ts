import Passport from "passport";
// import Strategy from "passport-openidconnect";
import Strategy from "openid-client";
import rn from "random-number";
import User from "../models/User";

Passport.use(new Strategy({
    client: "https://accounts.google.com/.well-known/openid-configuration",
    params: {
        client_id: process.env.OAUTH_ID,
        response_type: "code",
        scope: "openid profile email",
        nonce: rn({min: 111111, max: 999999999, integer: true}),
        redirect_uri: "https://bipartisan.herokuapp.com/user/account",
        state: rn({min: 1111111, max: 9999999999, integer: true}),
        prompt: "select_account consent",
        display: "popup",
        login_hint: "sub",
        realm: "https://bipartisan.herokuapp.com/"
    }
}, (tokenSet: any, userInfo: any, done: (arg0: null, arg1: any) => void) => {
    console.log("USERINFO: ", userInfo);
    console.log("TOKENSET: ", tokenSet);
    return done(null, tokenSet);
}));


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
