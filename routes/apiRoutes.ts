var routes = require("express").Router();
const controller = require("../controllers");


//routes.get("/", )

// Route to post our form submission to mongoDB via mongoose
routes.post("/submit", function(req, res) {
    // Create a new user using req.body
    User.create(req.body)
      .then(function(dbUser) {
        // If saved successfully, send the the new User document to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });

//app.get("/", function(req, res) {
    //res.send("This is a test");
//});

/****************************************************
 * LOGIN STUFF BELOW
 * DON'T TOUCH IF YOUR NAME IS NOT CATHERINE
 ******************************************************/




module.exports = routes;