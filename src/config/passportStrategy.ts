import dotenv from "dotenv";
import Passport from "passport";
import { Issuer, Strategy, generators } from "openid-client";
import User from "../models/User";

dotenv.config();

let googleClient;
async function discoverClient() {
    googleClient = await Issuer.discover("https://accounts.google.com/.well-known/openid-configuration")
        .then((googleIssuer: { Client: any; }) => {
            console.log("++++++++++++++++++++++++++++");
            console.log(googleIssuer.Client);
            return googleIssuer.Client;
    });
};
discoverClient();

// const createIssuer = async () => {
//     const issuer = await Issuer.discover("https://accounts.google.com/.well-known/openid-configuration");
//     console.log("++++++++++++++++++++++++");
//     console.log("ISSUER");
//     console.log(issuer);
//     return issuer.Client;
// };

// const googleClient = createIssuer();
// const googleClient = googleIssuer.Client;


// let googleIssuer;
// const googleClient = Issuer.discover("https://accounts.google.com/.well-known/openid-configuration")
//     .then((googleIssuer: { Client: any; }) => {
//         return googleIssuer.Client;
//     });

// let googleIssuer: any;
// let googleClient: any;
// Issuer.discover("https://accounts.google.com/.well-known/openid-configuration")
//     .then((newIssuer: { Client: any; }) => {
//         const googleIssuer = new Issuer(newIssuer);
//         console.log(googleIssuer);
//         const googleClient = googleIssuer.Client;
//         console.log(goog)
//     });

// const googleIssuer = Issuer.discover("https://accounts.google.com/.well-known/openid-configuration");
// const googleClient = googleIssuer.Client;

// let googleIssuer: any;
// let googleClient: any;
// const createClient = async (link: string) => {
//     const googleIssuer = await Issuer.discover(link);
//     return new Issuer(googleIssuer);
// };
// let newIssuer = createClient("https://accounts.google.com/.well-known/openid-configuration");
// googleClient = newIssuer.Client;
// createClient("https://accounts.google.com/.well-known/openid-configuration");
console.log("=====================");
// console.log(googleIssuer);
console.log("=====================");
console.log(googleClient);
console.log("=====================");



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

// session stuff
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