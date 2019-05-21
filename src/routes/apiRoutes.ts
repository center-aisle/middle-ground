// import controller from "../controllers/usersController.ts";
import User from '../models/User.ts';
import express from 'express';
const routes = express.Router();
import 'mongoose';

routes.get("/submit", function (req, res) {
    res.render("hello world")
});

routes.post("/submit", function (req, res) {
  User.create(req.body)
});

// Route to post our form submission to mongoDB via mongoose
routes.put('/submit', function(req: { body: any; }, res: { json: { (arg0: any): void; (arg0: any): void; }; }) {
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
