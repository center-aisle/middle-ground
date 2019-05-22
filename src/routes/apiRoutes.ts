// import controller from "../controllers/usersController.ts";
import "mongoose";
import User from "../models/User";
import Passport from "../config/passportStrategy";
import ensureLoggedIn from "connect-ensure-login";
import express from "express";
const routes = express.Router();


// need a .get route to retrieve user's info
// need a .put route to update user info with questionnaire answers



/*********************************
 * USER AUTHENTICATION BELOW
 * DO NOT TOUCH
 ***********************************/ 

// does the authenticating on hit
routes.post("/user/account", Passport.authenticate("openidconnect"));

// automatically redirects to /user/account if success else stay on /user page
routes.get("/user/account",
	Passport.authenticate("openidconnect", {
			session: true,
			failureRedirect: "/user" 
		}).then( (req: any,
			res: { redirect: (arg0: string) => void; }
		) => {
			console.log("SUCCESSFUL AUTHENTICATION NOW REDIRECTING");
			res.redirect("/user/account");
		})
);

// ensures that user is authenticated to access /user/account page
routes.get("/user/account",
	ensureLoggedIn("/user"),
	(req, res) => {
		console.log("USER: ", req.user);
		res.render("/user/account", { user: req.user });
	}
);

// destroys session on logout and redirects to home page "/"
routes.get("/logout", (req, res) => {
	console.log("LOGGING OUT SESSION: ", req.session);
	req.logout;
	req.session.destroy(() => res.redirect("/"));
});

export default routes;

/*****************************
 * ALL LOGIN ROUTES LISTED HERE FOR REFERENCE
 * 
 * /user (real page)
 * /user/account (real page)
 * /logout (redirect to home page)
 * /submit (stays on /user/account page)
 * /auth/openidconnect (post)
 * /auth/openidconnect/return (redirects to /user/account page)
 * 
 *******************************/
