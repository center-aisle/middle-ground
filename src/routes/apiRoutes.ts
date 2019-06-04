import 'mongoose';
import controller from '../controllers/usersController';
import User from '../models/User';
import Passport from '../config/passportStrategy';
import express from 'express';

const routes = express.Router();

// route that finds all users in the database
routes.get('/api/users', (req, res) => {
	res.status(200).json({
		success: true,
		data: 'Hi Team!!!',
	});
});

// route that finds one user within the database
routes.get('/api/users/:id', async (req, res) => {
	const openId: string = req.params.openId || null;
	try {
		const dbUser: any = await controller.findById(openId);
		return res.status(200).json({
			success: true,
			data: dbUser,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			data: 'User not found due to DB error',
		});
	}
});

// route that finds and updates the user's information. Patch needed maybe?
routes.put('/api/users/:id', async (req, res) => {
	const openId: string = req.params.openId;
	const updatedUser: any = req.body;
	try {
		const dbUser: any = await controller.update(openId, updatedUser);
		return res.status(200).json({
			success: true,
			data: dbUser,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			data: 'User information could not be updated due to DB error',
		});
	}
});

/*********************************
 * USER AUTHENTICATION BELOW
 * DO NOT TOUCH
 ***********************************/

// sends user to login (see passportStrategy.ts)
routes.post('/auth/openid-client', Passport.authenticate('openid-client'));

// automatically redirects to /user/account if success else stay on /user page
routes.get('/auth/openid-client/callback',
	Passport.authenticate('openid-client', {
		session: true,
		failureRedirect: '/questions' ,
		failureFlash: 'Invalid login, try again',
	}),	(req, res, done) => {
		const user = req.user;

		console.log(user);
		console.log(user.id);
		if (req.isAuthenticated) {
			res.redirect('/user/account');
			console.log('SUCCESSFUL AUTHENTICATION');
			return done(user);	
		} else {
			res.redirect("/");
		}
	}
);

// ensures that user is authenticated to access /user/account page
routes.get('/user/account',
	(req: any, res: any) => {
		console.log("IS AUTHENTICATED?: ", req.isAuthenticated);
		if (req.isAuthenticated) {
			res.redirect('/user/account');
		} else {
			res.redirect('/');
		}
	},
);

// destroys session on logout (including in db) and redirects to home page "/"
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
