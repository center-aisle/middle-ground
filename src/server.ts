import 'dotenv';
import express from 'express';
import session from 'express-session';
import path from 'path';
import mongoose from 'mongoose';
import passport from 'passport';

import routes from './routes/apiRoutes';
import login from './config/config';

const app = express(),
    PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
}

app.use(session({ secret: 'deodorize armpits' }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/user', login); // not sure if this line is necessary?
app.use(routes);
app.use(express.static('build/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/public/index.html'));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/users');

app.listen(PORT, () => {
    console.log('\uD83C\uDF0E  ==> API Server now listening on PORT ' + PORT + '!');
});
