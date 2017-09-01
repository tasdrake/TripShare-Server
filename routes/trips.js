const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
  knex('trips')
    .select([
      'id',
      'name',
      'completed',
      'image_url',
      'admin_id'
    ])
    .then(trips => res.send(trips))
    .catch(err => console.error(err));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  knex('trips')
    .select([
      'name',
      'completed',
      'image_url'
    ])
    .where('id', id)
    .then(trip => res.send(trip))
    .catch(err => console.error(err));
});

router.post('/', (req, res) => {
  const body = req.body;

  knex('trips')
    .insert(body)
    .returning([
      'name',
      'completed',
      'image_url'
    ])
    .then(newTrip => res.send(newTrip))
    .catch(err => console.error(err));
});

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  knex('trips')
    .update(body)
    .returning([
      'name',
      'completed',
      'image_url'
    ])
    .where('id', id)
    .then(updatedTrip => res.send(updatedTrip))
    .catch(err => console.error(err));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  knex('trips')
    .del()
    .returning([
      'name',
      'completed',
      'image_url'
    ])
    .where('id', id)
    .then(deletedTrip => res.send(deletedTrip))
    .catch(err => console.error(err));
});

module.exports = router;
