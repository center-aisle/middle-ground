// import controller from "../controllers/usersController.ts";
import User from "../models/User.ts";
import { Router as routes } from "express";
import "mongoose";

// Route to post our form submission to mongoDB via mongoose
routes.put("/submit", function(req: { body: any; }, res: { json: { (arg0: any): void; (arg0: any): void; }; }) {
    // Create a new user using req.body
    User.update(req.body)
      .then(function(dbUser: any) {
        // If saved successfully, send the the new User document to the client
        res.json(dbUser);
      })
      .catch(function(err: any) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });

// do NOT need a route to add/create new user, that's in the config file because associated with user login

export default routes;