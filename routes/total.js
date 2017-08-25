const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  knex('trips')
    // .select('*')
    .where('trips.id', id)
    .join('users', 'trips.id', 'users.trip_id')
    .select([
      'users.name',
      'amount_spent',
      'amount_owed'
    ])
    .then(people => {
      let total = 0;
      people.map(e => total += e.amount);
      const individualCost = total / people.length;
      res.send(people);
    })
    .catch(err => console.error(err));
});

module.exports = router;
