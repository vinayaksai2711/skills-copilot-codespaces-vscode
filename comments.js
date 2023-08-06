//create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// connect to mongoDB
mongoose.connect('mongodb://localhost:27017/express-demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

// create schema
const courseSchema = new mongoose.Schema({
    name: String, });