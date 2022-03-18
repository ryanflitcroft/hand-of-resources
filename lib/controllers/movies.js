const { Router } = require('express');
const Movie = require('../models/Movie');

module.exports = Router()
  .post('/', async (req, res) => {
    console.log('reqbody', req.body);
    const movie = await Movie.insert(req.body);
    res.send(movie);
  })

  .get('/', async (req, res) => {

  })

  .get('/:id', async (req, res) => {

  })

  .patch('/:id', async (req, res) => {

  })

  .delete('/:id', async (req, res) => {

  });