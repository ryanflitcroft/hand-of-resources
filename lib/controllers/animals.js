const { Router } = require('express');
const { updateById } = require('../models/Animal');
const Animal = require('../models/Animal');

module.exports = Router()
  .post('/', async (req, res) => {
    const animal = await Animal.insert(req.body);
    res.json(animal);
  })

  .get('/', async (req, res) => {
    const animals = await Animal.getAll();
    res.json(animals);
  })

  .get('/:id', async (req, res) => {
    const animal = await Animal.getById(req.params.id);
    res.json(animal);
  })

  .patch('/:id', async (req, res) => {
    const animal = await updateById(req.params.id, req.body);
    res.json(animal);
  })

  .delete('/:id', async (req, res) => {
    const animal = await Animal.deleteById(req.params.id);
    res.json(animal);
  });