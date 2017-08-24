const express = require('express');
const users = require('users');
const trips = require('trips');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use('/users', users);
app.use('/trips', trips);

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json(err);
});
module.exports = app;
