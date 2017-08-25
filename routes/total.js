const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  
});

module.exports = router;
