const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});


router.post('/', (req, res) => {
  const body = req.body;
  body.name = body.name[0].toUpperCase() + body.name.slice(1);
  body.trip = body.trip[0].toUpperCase() + body.trip.slice(1);
  console.log(body);
  // 50.42
  // res.send(req.body);
  knex('users')
    .select('*')
    .where('name', body.name)
    .then(user => {
      user.amount_spent += Number(req.body.amount);
      console.log(user);
      console.log('----------------');
      console.log(user.id);
      knex('users')
        .update(user)
        .where('id', user.id)
        .then(newUser => console.log(newUser));
    });
});


module.exports = router;
