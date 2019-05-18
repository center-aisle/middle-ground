const controller = require("../controllers"),
    routes = require("express").Router(),
	passport = require("passport"),
    OpenIDStrategy = require("passport-openid").Strategy,
    User = require("../models");


app.get("/", function(req, res) {
	res.send("This is a test");
});

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