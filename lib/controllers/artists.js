const { Router } = require('express');
const Animal = require('../models/Animal');
const Artist = require('../models/Artist');

module.exports = Router()
  .post('/', async (req, res) => {
    const artist = await Artist.insert(req.body);
    res.json(artist);
  })

  .get('/', async (req, res) => {

  })

  .get('/:id', async (req, res) => {

  })

  .patch('/:id', async (req, res) => {

  })

  .delete('/:id', async (req, res) => {

  });
