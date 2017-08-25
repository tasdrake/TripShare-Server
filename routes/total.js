const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  knex('trips')
    .where('trips.id', id)
    .join('users', 'trips.id', 'users.trip_id')
    .select([
      'users.name',
      'amount_spent',
      'amount_owed'
    ])
    .then(people => {
      let total = 0;
      people.map(e => total += e.amount_spent);
      const individualCost = total / people.length;
      let individualTotal = 0; // check how close to the total
      people.map(e => {
        if (e.amount_spent > individualCost) {
          // for exact cost
          //
          // e.amount_owed = -(e.amount_spent - individualCost).toFixed(2);

          // for whole dollar costs
          e.amount_owed = -Math.ceil(e.amount_spent - individualCost);
          individualTotal += e.amount_owed;
        } else {
          // for exact cost
          //
          // e.amount_owed = +(individualCost - e.amount_spent).toFixed(2);

          // for whole dollar costs
          e.amount_owed = +Math.ceil(individualCost - e.amount_spent);
          individualTotal += e.amount_owed;
        }
      });
      people.unshift({ total, individualCost, individualTotal });
      res.send(people);
    })
    .catch(err => console.error(err));
});

module.exports = router;
