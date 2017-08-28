const express = require('express');
const users = require('./routes/users');
const trips = require('./routes/trips');
const total = require ('./routes/total');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT

app.use(bodyParser.json());

app.use('/users', users);
app.use('/trips', trips);
app.use('/total', total);

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json(err);
});

app.listen(PORT || 3000, () => {
  console.log(`listening on port ${PORT || 3000}`);
});
module.exports = app;
