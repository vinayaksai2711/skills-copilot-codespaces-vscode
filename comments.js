//create web server
//require express
const express = require('express');
//require body-parser
const bodyParser = require('body-parser');
//require cors
const cors = require('cors');
//require path
const path = require('path');
//require express-validator
const expressValidator = require('express-validator');
//require express-session
const session = require('express-session');
//require connect-mongo
const MongoStore = require('connect-mongo')(session);
//require mongoose
const mongoose = require('mongoose');
//require config
const config = require('./config/database');
//require passport
const passport = require('passport');
//require passport-local
const LocalStrategy = require('passport-local').Strategy;
//require bcrypt
const bcrypt = require('bcryptjs');
//require multer
const multer = require('multer');
//require nodemailer
const nodemailer = require('nodemailer');
//require async
const async = require('async');
//require crypto
const crypto = require('crypto');

//connect to database
mongoose.connect(config.database, { useNewUrlParser: true });

//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

//on error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

//initialize app variable with express
const app = express();

//require users
const User = require('./models/user');

//require comments
const Comment = require('./models/comment');

//require posts
const Post = require('./models/post');

//require categories
const Category = require('./models/category');

//require tags
const Tag = require('./models/tag');

//require users
const User = require('./models/user');

//require comments
const Comment = require('./models/comment');

//require posts
const Post = require('./models/post');

//require categories
const Category = require('./models/category');

//require tags
const Tag = require('./models/tag');

//require users
const User = require('./models/user');

//require comments
const Comment = require('./models/comment');

//require posts
const Post = require('./models/post');

//require categories
const Category = require('./models/category');

//require tags
const Tag = require('./models/tag');

//require users
const User = require('./models/user');

//require comments
const Comment = require('./models/comment');

//require posts
const Post = require('./models/post');

//require