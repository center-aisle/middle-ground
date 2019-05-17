var passport = require("passport"),
    OpenIDStrategy = require("passport-openid").Strategy,
    util = require("util"),
    User = require("../models");

passport.use(new OpenIDStrategy({

    returnURL: "https://bipartisan.herokuapp.com/user/auth",
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