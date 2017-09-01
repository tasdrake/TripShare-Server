const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.post('/:name', (req, res) => {
  const name = req.params.name;
  knex('admin')
    .select('*')
    .where('name', name)
    .then(admin => {
      if (admin.length) return res.send(admin);
      knex('admin')
        .insert(name)
        .returning('*')
        .then(admin => res.send(admin))
        .catch(err => console.error(err));
    }).catch(err => console.error(err));
});

module.exports = router;
