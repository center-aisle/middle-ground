import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import path from 'path';
import flash from 'connect-flash';
import mongoose from 'mongoose';
import connectMongo from 'connect-mongo';
import routes from './routes/apiRoutes';
import Passport from './config/passportStrategy';

dotenv.config();

const app = express(),
	PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'dist')));
}
app.use(express.static((path.join(__dirname, 'public'))));
app.use(flash());

// sessions
const MongoStore = connectMongo(session);
app.use(session({
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({ url: process.env.MONGODB_URI || 'mongodb://localhost/Users' }),
    resave: false,
    saveUninitialized: true,
 }));
app.use(Passport.initialize());
app.use(Passport.session());

// routes
app.use(routes);

// get home page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Users');

app.listen(PORT, () => {
	console.log('\uD83C\uDF0E  ==> API Server now listening on PORT ' + PORT + '!');
});
