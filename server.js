// dependencies
import express from 'express';
import ejs from 'ejs';

// "app" environment
const app = express();

// variables
const port = 3000;

// set template engine to ejs
app.set('view engine', 'ejs');

// handle form post
app.use(express.urlencoded({extended: true}));

// listen to requests

// use route / controller modules
import routeStart from './controllers/start.js';
app.use('/start', routeStart);
app.use('/', routeStart);

import routeContact from './controllers/contact.js';
app.use('/contact', routeContact);

import routeAbout from './controllers/about.js';
app.use('/about', routeAbout);

// apple controller
import appleController from './controllers/appleController.js'
app.get('/apples', appleController.getAll);
app.post('/apples', appleController.addOne);




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