//create web server

//load modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comments = require('./models/comments');

//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set port
var port = process.env.PORT || 8080;

//connect to database
mongoose.connect('mongodb://localhost:27017/comments');

//routes for api
var router = express.Router();

//middleware to use for all requests
router.use(function(req, res, next) {
    //do logging
    console.log('Something is happening.');
    next(); //make sure we go to the next routes and don't stop here
});

//test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

//on routes that end in /comments
// ----------------------------------------------------
router.route('/comments')

    //create a comment (accessed at POST http://localhost:8080/api/comments)
    .post(function(req, res) {

        var comment = new Comments(); //create a new instance of the comment model
        comment.name = req.body.name; //set the comments name (comes from the request)
        comment.comment = req.body.comment; //set the comments comment (comes from the request)

        //save the comment and check for errors
        comment.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Comment created!' });
        });

    })

    //get all the comments (accessed at GET http://localhost:8080/api/comments)
    .get(function(req, res) {
        Comments.find(function(err, comments) {
            if (err)
                res.send(err);

            res.json(comments);
        });
    });

//on routes that end in /comments/:comment_id
// ----------------------------------------------------
router.route('/comments/:comment_id')

    //get the comment with that id (accessed at GET http://localhost:8080/api/comments/:comment_id)
    .get(function(req, res) {
        Comments.findById(req.params.comment_id, function(err, comment) {
            if (err)
                res.send(err);
            res.json(comment);
        });
    })

    //update the comment with this id