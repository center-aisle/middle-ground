// import controller from "../controllers/usersController.ts";
import 'mongoose';
import User from '../models/User';
import Passport from '../config/passportStrategy';
import { ensureLoggedIn } from 'connect-ensure-login';
import express from 'express';
// import { forInStatement } from "@babel/types";
const routes = express.Router();

// need a .get route to retrieve user's info
// need a .put route to update user info with questionnaire answers
// FIXME: Commented out to work on frontend.  Uncomment Catherine/Nicole
// Route to post (update) our form submission to mongoDB via mongoose
// routes.put("/submit", (req: { body: any; }, res: { json: { (arg0: any): void; (arg0: any): void; }; }) => {
// 	// update a user using req.body
// 	User.updateOne(req.body) // --->> there's a problem here
// 		.then((dbUser: any) => {
// 			// If saved successfully, send the the new User document to the client
// 			res.json(dbUser);
// 		})
// 		.catch((err: any) => {
// 			// If an error occurs, send the error to the client
// 			if (err) throw err;
// 		});
// });

/*********************************
 * USER AUTHENTICATION BELOW
 * DO NOT TOUCH
 ***********************************/

// does the authenticating on hit
routes.post('/auth/openidconnect', Passport.authenticate('openid-client'));


routes.post('/auth/openidconnect', Passport.authenticate('openid-client'));



// automatically redirects to /user/account if success else stay on /user page
routes.get('/auth/openidconnect/return',
	Passport.authenticate('openid-client', {
		session: true,
		failureRedirect: '/user' ,
		failureFlash: 'Invalid login, try again',
	}), (req: any,
		    res: { redirect: (arg0: string) => void; },
	) => {
		console.log('SUCCESSFUL AUTHENTICATION NOW REDIRECTING');
		res.redirect('/user/account');
	},
);

// ensures that user is authenticated to access /user/account page
routes.get('/user/account',
	ensureLoggedIn('/user'),
	(req: any, res: any) => {
		console.log('USER: ', req.user);
		res.render('/user/account', { user: req.user });
	},
);

// destroys session on logout and redirects to home page "/"
routes.get('/logout', (req: any, res: any) => {
	console.log('LOGGING OUT SESSION: ', req.session);
	req.logout;
	req.session.destroy(() => res.redirect('/'));
});

export default routes;

/*****************************
 * ALL LOGIN ROUTES LISTED HERE FOR REFERENCE
 *
 * /user (real page)
 * /user/account (real page)
 * /logout (redirect to home page)
 * /submit (stays on /user/account page)
 * /auth/openidconnect (api endpoint for post)
 * /auth/openidconnect/return (api endpoint that redirects to /user/account page)
 *
 *******************************/
