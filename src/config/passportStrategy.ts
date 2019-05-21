import Passport from "passport";
import { Strategy as OpenIDConnectStrategy } from "passport-openidconnect";
    
// import "../controllers";
import User from "../models/User";

Passport.use(new OpenIDConnectStrategy({
    returnURL: "https://bipartisan.herokuapp.com/user/account",
    realm: "https://bipartisan.herokuapp.com/",
    profile: true,
    scope: "openidconnect profile"
}, (
    identifier: any,
    profile: { 
        givenName: any;
        familyName: any;
        emails: { value: any; }[];
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
