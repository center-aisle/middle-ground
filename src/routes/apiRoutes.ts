// import controller from "../controllers/usersController.ts";
import "mongoose";
import User from "../models/User";
import Passport from "passport";
import ensureLoggedIn from "connect-ensure-login";
import express from "express";
const routes = express.Router();


// Route to post (update) our form submission to mongoDB via mongoose
routes.put("/submit", (req: { body: any; }, res: { json: { (arg0: any): void; (arg0: any): void; }; }) => {
	// update a user using req.body
	User.updateOne(req.body) // --->> there's a problem here
		.then((dbUser: any) => {
			// If saved successfully, send the the new User document to the client
			res.json(dbUser);
		})
		.catch((err: any) => {
			// If an error occurs, send the error to the client
			if (err) throw err;
		});
});



/*********************************
 * 
 * USER AUTHENTICATION BELOW
 * DO NOT TOUCH
 * 
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

routes.get("/logout", function (req, res) {
	console.log("SESSION: ", req.session);
	req.session.destroy(() => res.redirect("/"));
});

export default routes;

/*****************************
 * ALL ROUTES LISTED HERE FOR REFERENCE
 * 
 * /user (real page)
 * /user/account (real page)
 * /logout
 * /submit
 * /auth/openidconnect
 * /auth/openidconnect/return
 * 
 *******************************/
