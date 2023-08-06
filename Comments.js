//create web server
var express = require('express');
//create an instance of express called app
var app = express();
//create a route
app.get('/', function(req, res){
    res.send('this is the homepage');
});
//create another route
app.get('/contact', function(req, res){
    res.send('this is the contact page');
});
//create another route
app.get('/profile/:id', function(req, res){
    res.send('You requested to see a profile with the id of ' + req.params.id);
});
//listen to port 3000
app.listen(3000);
// Path: app.js
// Compare this snippet from app.js:
