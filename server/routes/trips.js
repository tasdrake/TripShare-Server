const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
  knex('trips')
    .get('*')
    .then(trips => res.send(trips))
    .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  knex('trips')
    .get('*')
    .where('id', id)
    .then(trip => res.send(trip))
    .catch(err => console.log(err));
});

router.post('/', (req, res) => {
  const body = req.body;

  knex('trips')
    .input(body)
    .returning('*')
    .then(newTrip => res.send(newTrip))
    .catch(err => console.log(err));
});

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  knex('trips')
    .update(body)
    .returning('*')
    .where('id', id)
    .then(updatedTrip => res.send(updatedTrip))
    .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  knex('trips')
    .del()
    .returning('*')
    .where('id', id)
    .then(deletedTrip => res.send(deletedTrip))
    .catch(err => console.log(err));
});

module.exports = router;
