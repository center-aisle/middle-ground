const controller = require("../controllers");
var routes = require("express").Router(),
	passport = require("passport"),
    OpenIDStrategy = require("passport-openid").Strategy,
    util = require("util"),
    User = require("../models");


//routes.get("/", )

// Route to post our form submission to mongoDB via mongoose
// routes.post("/submit", function(req, res) {
//     // Create a new user using req.body
//     User.create(req.body)
//     	.then(function(dbUser) {
//     	// If saved successfully, send the the new User document to the client
//     	res.json(dbUser);
//     }).catch(function(err) {
//     // If an error occurs, send the error to the client
//     	res.json(err);
//     });
// });

//app.get("/", function(req, res) {
	//res.send("This is a test");
//});

/****************************************************
 * LOGIN STUFF BELOW
 * DON'T TOUCH IF YOUR NAME IS NOT CATHERINE
 ******************************************************/

passport.use(new OpenIDStrategy({

    returnURL: "https://bipartisan.herokuapp.com/user",
    realm: "https://bipartisan.herokuapp.com/",
    profile: true

}, (identifier, profile, done) => {

    User.findOrCreate({
        openId: identifier,
        firstName: profile.givenName,
        lastName: profile.familyName,
        email: profile.emails[0].value
    }, (err, user) => {

        done(err, user);
        
    });
}));

routes.post("/auth/openid", passport.authenticate("openid"));

routes.get("/auth/openid/return",
	passport.authenticate("openid", {
		successRedirect: "/user",
		failureRedirect: "/" 
	})
);


module.exports = routes;