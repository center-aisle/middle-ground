import dotenv from 'dotenv';
import Passport from 'passport';
import { Issuer, Strategy, generators } from 'openid-client';
import User, { IUser } from '../models/User';

dotenv.config();

// connect to google client
Issuer.discover('https://accounts.google.com/.well-known/openid-configuration')
    .then((googleIssuer: { issuer: any; metadata: any; Client: any; }) => {
        // console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);
        const client = new googleIssuer.Client({
            client_id: process.env.GOOGLE_ID,
            client_secret: process.env.GOOGLE_SECRET,
            redirect_uris: ['https://bipartisan.herokuapp.com/user/account', 'https://bipartisan.herokuapp.com/user'],
            response_types: ['code token id_token'],
        });
        const params = {
            client_id: process.env.GOOGLE_ID,
            response_type: 'code token id_token',
            scope: 'openid profile email',
            nonce: generators.nonce(),
            redirect_uri: 'https://bipartisan.herokuapp.com/user/account',
            state: generators.state(),
            prompt: 'select_account',
            display: 'popup',
            login_hint: 'sub',
        };
        const verify = async ( access_token: any, id_token: any, expires_in: any, token_type: any, done: (arg0: null, arg1: any) => void ) => {
            console.log('access_token: ', access_token);
            console.log('id_token: ', id_token);
            console.log('expires_in: ', expires_in);
            console.log('token_type: ', token_type);
            // User.findOrCreate({
            //     openId: id_token.sub,
            //     firstName: id_token.given_name,
            //     lastName: id_token.family_name,
            //     email: id_token.email,
            //     picture: id_token.picture
            // }, (err: any, user: any) => {
            //     if (err) {
            //         done(err, user);
            //     }
            //     if (!user) {
            //         done(null, false);
            //     }
            //     done(null, user);
            // });
            let user: IUser | null = null;
            try {
                user = await User.findOrCreate({
                    openId: id_token.sub,
                    firstName: id_token.given_name,
                    lastName: id_token.family_name,
                    email: id_token.email,
                    picture: id_token.picture,
                });
            } catch (error) {
                done(error, null);
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
        console.log('SERIALIZED USER: ', user.id);
        done(null, user.id);
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