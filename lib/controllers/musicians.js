const { Router } = require('express');
const Musician = require('../models/Musician');

module.exports = Router()
  .post('/', async (req, res) => {
    const musician = await Musician.insert(req.body);
    res.json(musician);
  })

  .get('/', async (req, res) => {
    const musician = await Musician.getAll(req.body);
    res.json(musician);
  })

  .get('/:id', async (req, res) => {

  })

  .patch('/:id', async (req, res) => {

  })

  .delete('/:id', async (req, res) => {

  });