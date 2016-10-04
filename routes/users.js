'use strict';

const express = require('express');
const bcrypt = require('bcrypt-as-promised');
const knex = require('../knex')

// eslint-disable-next-line new-cap
const router = express.Router();

// YOUR CODE HERE
router.post('/users', (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => { //hashed_password is the same as "data"
      return knex('users').insert({first_name: req.body.firstName, last_name: req.body.lastName, email: req.body.email, hashed_password: hashed_password})  //again, hashed_password is the same as "data:data"
      console.log(req.body.email, hashed_password);
    })
    .then((users) => {  //users is just a placeholder for the knex data
      const user = users[0];    //this is the knex object returned in an array
      delete user.hashed_password;  // The delete operator removes a property from an object. We're doing this is getting sent back to the front end and we don't want to send the hashed password back across the net.
      res.send('worked');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
