const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://api.github.com';

router.get('/', (req, res) => {
  res.send('api works');
});

/*
 * Mock api
 */

// Get users
router.get('/users', (req, res) => {
  axios
  .get(`${API}/users`)
  .then(users => {
    res.status(200).json(users.data);
  })
  .catch(error => {
    res.status(500).send(error);
  });
});

module.exports = router;