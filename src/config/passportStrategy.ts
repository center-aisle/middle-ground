import dotenv from 'dotenv';
import Passport from 'passport';
import Strategy, { Issuer, generators } from 'openid-client';
import User, { IUser } from '../models/User';

dotenv.config();

// connect to google client
Issuer.discover('https://accounts.google.com/.well-known/openid-configuration')

    .then(googleIssuer => {

        const client = new googleIssuer.Client({
            client_id: process.env.GOOGLE_ID,
            client_secret: process.env.GOOGLE_SECRET,
            redirect_uris: ['https://bipartisan.herokuapp.com/user/account', 'http://localhost:3000/user/account'],
            response_types: ['code token id_token'],
        });

        const params = {
            client_id: process.env.GOOGLE_ID,
            response_type: 'code token id_token',
            scope: 'openid profile email',
            nonce: generators.nonce(),
            redirect_uri: 'http://localhost:3000/user/account',
            state: generators.state(),
            prompt: 'select_account',
            display: 'popup',
            login_hint: 'sub',
        };

        const verify = async ( tokenset: any, userinfo: any, done: (arg0: null, arg1: any) => void ) => {
            console.log('tokenset: ', tokenset);
            const access_token = tokenset.access_token;
            console.log('access_token: ', access_token);
            const id_token = tokenset.id_token;
            console.log('id_token: ', id_token);
            console.log('userinfo: ', userinfo);

            let user: IUser | null = null;
            try {
                user = await User.findOrCreate({
                    openId: tokenset.claims.sub,
                    firstName: tokenset.claims.given_name,
                    lastName: tokenset.claims.family_name,
                    email: tokenset.claims.email,
                    picture: tokenset.claims.picture,
                    });
            } catch (err) {
                done(err, null);
            }
            return done(null, {user, access_token, id_token});
        };

        const passReqToCallback = false;
        const sessionKey = generators.random();
        const usePKCE = false;
        const options = {
            client,
            params,
            passReqToCallback,
            sessionKey,
            usePKCE,
        };

        let Strategy: any;

        Passport.use('openid-client', new Strategy( options, verify ));

    }).catch((err: any) => {
        if (err) {
            console.log(err);
        }
    });

// session stuff
Passport.serializeUser((
    user: any,
    done: (
        arg0: any,
        arg1: any,
    ) => void) => {
        console.log('SERIALIZED USER: ', user);
        done(null, user);
    },
);

Passport.deserializeUser((
    openId: any,
    done: (
        arg0: any,
        arg1: any,
    ) => void) => {
        User.findById(openId, (err: any, user: any) => {
            console.log('DESERIALIZED USER: ', user);
            done(err, user);
            });
    },
);

export default Passport;
