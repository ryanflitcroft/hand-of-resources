const { Router } = require('express');
const Movie = require('../models/Movie');

module.exports = Router()
  .post('/', async (req, res) => {
    const movie = await Movie.insert(req.body);
    res.json(movie);
  })

  .get('/', async (req, res) => {
    const movies = await Movie.getAll();
    res.json(movies);
  })

  .get('/:id', async (req, res) => {
    const movie = await Movie.getById(req.params.id);
    res.json(movie);
  })

  .patch('/:id', async (req, res) => {
    const movie = await Movie.updateById(req.params.id, req.body);
    res.json(movie);
  })

  .delete('/:id', async (req, res) => {
    const movie = await Movie.deleteById(req.params.id);
    res.json(movie);
  });