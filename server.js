// dependencies
import express from 'express';
import ejs from 'ejs';

// "app" environment
const app = express();

// variables
const port = 3000;

// set template engine to ejs
app.set('view engine', 'ejs');

// listen to requests
app.use('*', (req, res, next) => {
    // console.log(`Server handle: ${req.method} to ${req.baseUrl}`);
    next();
});

// handle form post
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

import routePost from './routes/post.js';
app.use('/api', routePost);

// all other posts ... redirect to start page
app.post('*', (req, res) => {
    res.redirect('/');
});

// use route modules
import routeStart from './routes/start.js';
app.use('/start', routeStart);
app.use('/', routeStart);

import routeContact from './routes/contact.js';
app.use('/contact', routeContact);

import routeAbout from './routes/about.js';
app.use('/about', routeAbout);

// serve static files
app.use(express.static('public'));

// handle errors

// 404 not found
app.get('*', (req, res, next) => {
    res.render('404');
});

// server error 500...
// leading fourth argument is default an error...
app.use((err, req, res, next) => {

    // log error to file...

    // show response
    return res.status(500).send("Server error, please return later");
});

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});