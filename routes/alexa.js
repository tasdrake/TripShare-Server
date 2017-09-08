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
  knex('users')
    .select('*')
    .where('name', body.name)
    .then(user => {
      user[0].amount_spent = Number(req.body.amount) + Number(user[0].amount_spent);
      knex('users')
        .update({amount_spent: user[0].amount_spent})
        .where('id', user[0].id)
        .returning([
          'name',
          'amount_spent',
        ])
        .then(updatedUser => {
          updatedUser[0].amount = body.amount;
          console.log(updatedUser);
          res.send(updatedUser);
        })
        .catch(err => console.error(err));
    });
});


module.exports = router;
