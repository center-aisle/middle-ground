require("dotenv").config();
var express = require("express"),
    mongoose = require("mongoose"),
    path = require("path");
    // var routes = require("./routes"); //uncomment out when apiroutes file is complete

const passport = require("passport"),
    OpenIDStrategy = require("passport-openid").Strategy,
    util = require("util");

//Initalize express
var app = express(),
    PORT = process.env.PORT || 3001;

//Middleware Parses request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
}
;
// Add routes, both API and view
// app.use(routes); // uncomment out when there is more on apiroutes.tsx
app.use(express.static("public"));
// If no API routes are hit, send the React app
app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

/*****************************
 * LOGIN STUFF
 * NO TOUCHY
 ******************************/

app.post("/auth/openid", passport.authenticate("openid"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");
// Start the API server
app.listen(PORT, function () {
    console.log("\uD83C\uDF0E  ==> API Server now listening on PORT " + PORT + "!");
});
