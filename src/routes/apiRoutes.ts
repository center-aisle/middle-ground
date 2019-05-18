var controller = require("../controllers"),
    User = require("../models"),
    routes = require("express").Router();


// routes.get(function(req, res) {
// 	res.send("This is a test");
// });

// do NOT need a route to add/create new user, that's in the config file because associated with user login

export default routes;