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
      user[0].amount_spent = Number(req.body.amount) + Number(user[0].amount_spent);
      console.log(user[0]);
      console.log('----------------');
      console.log(user[0].id);
      knex('users')
        .update(user[0].amount_spent)
        .where('id', user[0].id)
        .then(newUser => console.log(newUser));
    });
});


module.exports = router;
