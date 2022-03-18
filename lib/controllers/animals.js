const { Router } = require('express');
const Animal = require('../models/Animal');

module.exports = Router()
  .post('/', async (req, res) => {
    console.log('reqbody----', req.body);
    const animal = await Animal.insert(req.body);
    res.json(animal);
    console.log('animal!!!!', animal);
  })

  .get('/', async (req, res) => {

  })

  .get('/:id', async (req, res) => {

  })

  .patch('/:id', async (req, res) => {

  })

  .delete('/:id', async (req, res) => {

  });