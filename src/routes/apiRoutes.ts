import 'mongoose';
import users from '../controllers/users';
import User from '../models/User';
import politicalQuestions from '../controllers/politicalQuestions';
import PoliticalQuestion from '../models/PoliticalQuestion';
import Passport from '../config/passportStrategy';
import express from 'express';
import { access } from 'fs';

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
		const dbUser: any = await users.findById(openId);
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
routes.get('/api/users/:id', async (req, res) => {
	const openId: string = req.params.openId || null;
	try {
		const dbUser: any = await users.findById(openId);
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

/********************************
* POLITICAL AND PERSONAL QUESTIONS
********************************/

routes.get('/api/politicalQuestions', async (req, res) => {
	console.log(res);
	res.status(200).json({
		success: true,
		data: res,
	});
});

routes.get('/api/politicalQuestions/:id', async (req, res) => {
	console.log(res);
	const questionId: string = req.params.id || null;
	try {
		const dbQuestion: any = await politicalQuestions.findById(questionId);
		return res.status(200).json({
			success: true,
			data: dbQuestion,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			data: 'Question not found due to DB error',
		});
	}
});

// following personal routes will need to be edited

routes.get('/api/home', async (req, res) => {
	console.log(res);
	res.status(200).json({
		success: true,
		data: res,
	});
});

routes.get('/api/music', async (req, res) => {
	console.log(res);
	res.status(200).json({
		success: true,
		data: res,
	});
});

routes.get('/api/outdoors', async (req, res) => {
	console.log(res);
	res.status(200).json({
		success: true,
		data: res,
	});
});

routes.get('/api/sports', async (req, res) => {
	console.log(res);
	res.status(200).json({
		success: true,
		data: res,
	});
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
		const access_token = req.body.access_token;
		const id_token = req.body.id_token;

		console.log(user);
		console.log(user.id);
		if (req.isAuthenticated) {
			res.redirect('/user/account');
			console.log('SUCCESSFUL AUTHENTICATION');
			return done({user, access_token, id_token});
		} else {
			res.redirect('/');
		}
	},
);

// ensures that user is authenticated to access /user/account page
routes.get('/user/account',
	(req: any, res: any) => {
		console.log('IS AUTHENTICATED?: ', req.isAuthenticated);
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
