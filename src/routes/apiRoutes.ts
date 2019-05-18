<<<<<<< HEAD
import controller from "../controllers";
import User from "../models";
import {Router as routes} from "express";
=======
import controller from "../controllers/usersController.ts";
import User from "../models/User.ts";
import { Router as routes } from "express";
>>>>>>> f99209220c495265f899aa1d2e061fc6d8eaa823


// Route to post our form submission to mongoDB via mongoose
routes.post("/submit", function(req: { body: any; }, res: { json: { (arg0: any): void; (arg0: any): void; }; }) {
    // Create a new user using req.body
    User.create(req.body)
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