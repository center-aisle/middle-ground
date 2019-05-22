import "dotenv";
import express from "express";
import session from "express-session";
import path from "path";
import mongoose from "mongoose";
import { session as MongoStore } from "connect-mongo";
import routes from "./routes/apiRoutes";
import Passport from "./config/passportStrategy";

const app = express(),
    PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "dist")));
};
app.use(express.static((path.join(__dirname, "public"))));

// sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({ mongooseConnection: process.env.MONGODB_URI || "mongodb://localhost/users" }),
    resave: false,
    saveUninitialized: true
 }));
app.use(Passport.initialize());
app.use(Passport.session());

// routes
// check these
app.use(routes);

// get home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/users');

app.listen(PORT, () => {
    console.log('\uD83C\uDF0E  ==> API Server now listening on PORT ' + PORT + '!');
});
