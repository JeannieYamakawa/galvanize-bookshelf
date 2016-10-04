'use strict';

const express = require('express');
const knex = require('../knex')
// eslint-disable-next-line new-cap
const router = express.Router();

// YOUR CODE HERE


router.get('/books', function(req,res){
    knex('books').then(
        function(data){
            res.send(data)
        }
    )

})

module.exports = router;
