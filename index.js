const path = require('path');
const express = require('express');
const { config, engine }  = require('express-edge');
 
const app = new express();      // use express to run app
 
app.use(express.static('public'));  // images, css, js
app.use(express.static('pages'));   // static pages
app.use(engine);               // template engine
app.set('views', __dirname + '/views'); // set the views for the template engine

app.get('/', (req, res) => {
    console.log('User ' + req.connection.remoteAddress + ' went to index');
    res.render('index');
});

app.get('/about', (req, res) => {
    console.log('User ' + req.connection.remoteAddress + ' went to about');
    res.render('about');
});

app.get('/contact', (req, res) => {
    console.log('User ' + req.connection.remoteAddress + ' went to contact');
    res.render('contact');
});
 
app.get('/post', (req, res) => {
    console.log('User ' + req.connection.remoteAddress + ' went to post');
    res.render('post');
});

app.listen(4000, () => {
    let ts = Date.now();
    console.log('App listening on port 4000');
});