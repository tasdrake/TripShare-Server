const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
  console.log(req.body);
});


router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
});


module.exports = router;
