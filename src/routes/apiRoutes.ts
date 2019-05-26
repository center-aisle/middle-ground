import UserController from '../controllers/usersController';
import 'mongoose';
import User from '../models/User';
import Passport from '../config/passportStrategy';
import { ensureLoggedIn } from 'connect-ensure-login';
import express from 'express';
const routes = express.Router();

// Route to post (update) our form submission to mongoDB via mongoose
// routes.put("/submit", (req, res) => {
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

//this is going to be the route that finds the user within the database
routes.get("/users", (req, res) => {
	res.status(200).json({
		success: true,
		data: "Hi Team!!!",
	});
});

//this is going to be the route that finds the user within the database
routes.get("/users/:id", async (req, res) => {
	const userId: string = req.params.id || null;
	try {
		const dbUser: any = await UserController.findById(userId)
		return res.status(200).json({
			success: true,
			data: dbUser
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			data: "User not found due to DB error"
		});
	}
});

//This is going to be the route that finds and updates the user's information. Patch needed maybe?
routes.put("/users/:id", async (req, res) => {
	const userId: string = req.params.id;
	const updatedUser: any = req.body;
	try {
		const dbUser: any = await UserController.update(userId, updatedUser)
		return res.status(200).json({
			success: true,
			data: dbUser
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			data: "User information could not be updated due to DB error"
		});
	}
});

/*********************************
 * USER AUTHENTICATION BELOW
 * DO NOT TOUCH
 ***********************************/

// does the authenticating on hit
routes.get('/auth/openidconnect', Passport.authenticate('openid-client'));

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
		req.json(req.user, req.access_token);
		res.redirect('http://localhost:3000/user/account');
	},
);

// ensures that user is authenticated to access /user/account page
routes.get('/user/account',
	ensureLoggedIn('/user'),
	(req: any, res: any) => {
		console.log('USER: ', req.user);
		res.render('http://localhost:3000/user/account');
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
