import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import path from 'path';
import flash from 'connect-flash';
import cors from 'cors';
import mongoose from 'mongoose';
import connectMongo from 'connect-mongo';
import routes from './routes/apiRoutes';
import Passport from './config/passportStrategy';

dotenv.config();

const app = express(),
	PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// test
console.log(path.join(__dirname, '../client/build'));
app.use(express.static(path.join(__dirname, '../client/build')));
// test end


// sessions
const MongoStore = connectMongo(session);
const sessionOptions = {
	secret: process.env.SESSION_SECRET,
	store: MongoStore,
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false }
};
if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
    sessionOptions.cookie.secure = true;
    app.use(express.static(path.join(__dirname, 'client/build')));
}
app.use(session(sessionOptions));

app.use(Passport.initialize());
app.use(Passport.session());

app.use(flash());

// routes
app.use(routes);

// get home page
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// createConnection because sessions opened a new connection above already
mongoose.createConnection(
    process.env.MONGODB_URI || 'mongodb://localhost/middleground',
    { useNewUrlParser: true },
);

app.listen(PORT, () => {
	console.log('\uD83C\uDF0E  ==> API Server now listening on PORT ' + PORT + '!');
});
