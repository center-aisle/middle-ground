// import controller from "../controllers/usersController.ts";
import "mongoose";
import User from "../models/User";
import Passport from "../config/passportStrategy";
import ensureLoggedIn from "connect-ensure-login";
import express from "express";
const routes = express.Router();


// need a .get route
// .put route to update user info with questionnaire answers



/*********************************
 * USER AUTHENTICATION BELOW
 * DO NOT TOUCH
 ***********************************/ 


routes.post("/auth/openidconnect", Passport.authenticate("openidconnect",
	{scope: "openidconnect profile"}
));

routes.get("/auth/openidconnect/return",
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

routes.get("/user/account",
	ensureLoggedIn("/user"),
	(req, res) => {
		console.log("USER: ", req.user);
		res.render("/user/account", { user: req.user });
	}
);

routes.get("/logout", (req, res) => {
	console.log("LOGGING OUT SESSION: ", req.session);
	req.session.destroy(() => res.redirect("/"));
});

export default routes;

/*****************************
 * ALL ROUTES LISTED HERE FOR REFERENCE
 * 
 * /user (real page)
 * /user/account (real page)
 * /logout (redirect to home page)
 * /submit (stays on /user/account page)
 * /auth/openidconnect (post)
 * /auth/openidconnect/return (redirects to /user/account page)
 * 
 *******************************/
