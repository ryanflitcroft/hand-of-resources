const { Router } = require('express');
const Concert = require('../models/Concert');

module.exports = Router()
  .post('/', async (req, res) => {
    const concert = await Concert.insert(req.body);
    res.json(concert);
  })

  .get('/', async (req, res) => {
    const concerts = await Concert.getAll();
    res.json(concerts);
  })

  .get('/:id', async (req, res) => {
    const concert = await Concert.getById(req.params.id);
    res.json(concert);
  })

  .patch('/:id', async (req, res) => {
    const concert = await Concert.updateById(req.params.id, req.body);
    res.json(concert);
  })

  .delete('/:id', async (req, res) => {
    const concert = await Concert.deleteById(req.params.id);
    res.json(concert);
  });