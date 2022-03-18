const { Router } = require('express');
const Animal = require('../models/Animal');

module.exports = Router()
  .post('/', async (req, res) => {
    const animal = await Animal.insert(req.body);
    res.json(animal);
  })

  .get('/', async (req, res) => {
    console.log('reqbody----', req.body);
    const animals = await Animal.getAll();
    res.json(animals);
  })

  .get('/:id', async (req, res) => {

  })

  .patch('/:id', async (req, res) => {

  })

  .delete('/:id', async (req, res) => {

  });