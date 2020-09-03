const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-morgan');
const passport = require('passport');

require('dotenv').config();
require('./config/database');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}))
app.use(express.static(path.join(__dirname, 'public')))
app.session(session({
  secret: 'Caddie',
  resave: false,
  saveUninitalized: true
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res) {
  res.status(404).send('/error')
});

module.exports = app;