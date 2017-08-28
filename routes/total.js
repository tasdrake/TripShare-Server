const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/rough/:id', (req, res) => {
  const id = req.params.id;
  knex('trips')
    .where('trips.id', id)
    .join('users', 'trips.id', 'users.trip_id')
    .select([
      'users.id',
      'users.name',
      'amount_spent',
      'amount_owed',
      'paid',
      'phone',
    ])
    .then(people => {
      let total = 0;
      people.map(e => total += Number(e.amount_spent));
      let individualCost = total / people.length;
      let individualTotal = 0; // check how close to the total
      people.map(e => {
        if (e.amount_spent > individualCost) {
          e.amount_owed = (-Math.ceil(e.amount_spent - individualCost)) + '.00';
        } else {
          e.amount_owed = Math.ceil(individualCost - e.amount_spent) + '.00';
        }
        individualTotal += (Number(e.amount_owed));
        knex('users')
          .update('amount_owed', e.amount_owed)
          .where('id', e.id)
          .where('trip_id', id)
          .returning('*')
          .catch(err => console.error(err));
      });
      individualCost = Math.ceil(individualCost);
      people.unshift({ total, individualCost, individualTotal });
      res.send(people);
    })
    .catch(err => console.error(err));
});

router.get('/exact/:id', (req, res) => {
  const id = req.params.id;
  knex('trips')
    .where('trips.id', id)
    .join('users', 'trips.id', 'users.trip_id')
    .select([
      'users.id',
      'users.name',
      'amount_spent',
      'amount_owed',
      'paid',
      'phone',
    ])
    .then(people => {
      let total = 0;
      people.map(e => total += Number(e.amount_spent));
      const individualCost = total / people.length;
      let individualTotal = 0; // check how close to the total
      people.map(e => {
        if (e.amount_spent > individualCost) {
          e.amount_owed = (-(e.amount_spent - individualCost)).toFixed(2);
        } else {
          e.amount_owed = (individualCost - e.amount_spent).toFixed(2);
        }
        individualTotal += Number(e.amount_owed);
        knex('users')
          .update('amount_owed', e.amount_owed)
          .where('id', e.id)
          .where('trip_id', id)
          .returning('*')
          .catch(err => console.error(err));
      });
      people.unshift({ total, individualCost, individualTotal });
      res.send(people);
    })
    .catch(err => console.error(err));
});

module.exports = router;
