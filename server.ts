require("dotenv").config();
const express = require("express");

var mongoose = require("mongoose");
const path = require("path");
// var routes = require("./routes"); uncomment out when apiroutes file is complete

//Initalize express
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware Parses request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
};

// Add routes, both API and view
// app.use(routes); uncomment out when there is more on apiroutes.tsx
//app.use(express.startic("public"));

// If no API routes are hit, send the React app
app.use("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
