const passport = require("passport"),
    OpenIDStrategy = require("passport-openid").Strategy,
    util = require("util"),
    User = require("../models");

passport.use(new OpenIDStrategy({
    returnURL: "https://bipartisan.herokuapp.com/user/auth",
    realm: "https://bipartisan.herokuapp.com/"
}, (identifier, done) => {
    User.findOrCreate({
        openId: identifier
    }, (err, user) => {
        done(err, user);
    });
}));