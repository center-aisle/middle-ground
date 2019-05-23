// import controller from "../controllers/usersController.ts";
import "mongoose";
import User from "../models/User";
import Passport from "../config/passportStrategy";
import ensureLoggedIn from "connect-ensure-login";
import express from "express";
import { forInStatement } from "@babel/types";
const routes = express.Router();


// need a .get route to retrieve user's info
// need a .put route to update user info with questionnaire answers
//FIXME: Commented out to work on frontend.  Uncomment Catherine/Nicole
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

<<<<<<< HEAD
// destroys session on logout and redirects to home page "/"
routes.get("/logout", (req, res) => {
	console.log("LOGGING OUT SESSION: ", req.session);
	req.logout;
	req.session.destroy(() => res.redirect("/"));
});
=======
//FIXME: Recomment later
// routes.get("/logout", (req, res) => {
// 	console.log("SESSION: ", req.session);
// 	req.session.destroy(() => res.redirect("/"));
// });
>>>>>>> fc6d12876627c1433798b6ead0aef132e905f3fa

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
