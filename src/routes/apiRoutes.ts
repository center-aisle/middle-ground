const controller = require("../controllers"),
	passport = require("passport"),
    OpenIDStrategy = require("passport-openid").Strategy;

var User = require("../models");

var routes = require("express").Router();


// routes.get(function(req, res) {
// 	res.send("This is a test");
// });

/****************************************************
 * LOGIN STUFF BELOW
 * DON'T TOUCH IF YOUR NAME IS NOT CATHERINE
 ******************************************************/

passport.use(new OpenIDStrategy({

    returnURL: "https://bipartisan.herokuapp.com/user",
    realm: "https://bipartisan.herokuapp.com/",
    profile: true

}, (identifier: any, profile: { givenName: any; familyName: any; emails: { value: any; }[]; }, done: (arg0: any, arg1: any) => void) => {

    User.findOrCreate({
        openId: identifier,
        firstName: profile.givenName,
        lastName: profile.familyName,
        email: profile.emails[0].value
    }, (err: any, user: any) => {

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