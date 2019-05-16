require("dotenv").config();
const express = require("express"),
    mongoose = require("mongoose"),
    path = require("path"),
    routes = require("./routes"),
    passport = require("passport");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("/build"));
}

app.use(routes);
//app.use(express.static("public"));

// If no API routes are hit, send the React app
app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

/**********************************
 * USER AUTHENTICATION/AUTHORIZATION MAGIC BELOW
 * NO TOUCHY IF YOUR NAME IS NOT CATHERINE
 **********************************/










///////////////////////////////////////////////////////

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
