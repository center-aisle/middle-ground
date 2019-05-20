// import controller from "../controllers/usersController.ts";
import "mongoose";
import User from "../models/User";
import express from "express";
const routes = express.Router();


// Route to post our form submission to mongoDB via mongoose
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

routes.post("/auth/openid", (req, res) => {
	User.findOrCreate({
		openId: req.body.openId,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	}, (err, user) => {
		if (err) throw err;
	}).then((dbUser: any) => {
		res.json(dbUser);
	}).catch((err: any) => {
		if (err) throw err;
	});
});

export default routes;