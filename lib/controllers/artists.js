const { Router } = require('express');
const Animal = require('../models/Animal');
const Artist = require('../models/Artist');

module.exports = Router()
  .post('/', async (req, res) => {
    const artist = await Artist.insert(req.body);
    res.json(artist);
  })

  .get('/', async (req, res) => {
    const artists = await Artist.getAll(req.body);
    res.json(artists);
  })

  .get('/:id', async (req, res) => {
    const artist = await Artist.getById(req.params.id);
    res.json(artist)
  })

  .patch('/:id', async (req, res) => {
    const artist = await Artist.updateById(req.params.id, req.body);
    res.json(artist);
  })

  .delete('/:id', async (req, res) => {

  });
