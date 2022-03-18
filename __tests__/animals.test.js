const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Animal = require('../lib/models/Animal');

describe('hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to insert an instance of Animal to animals', async () => {
    const res = await request(app)
      .post('/api/v1/animals')
      .send({
        commonName: 'Bluefin Tuna',
        scientificName: 'Thunnus thynnus',
        isEndangered: true,
        conservationStatus: 'endangered'
      });
    
    expect(res.body).toEqual({
      id: expect.any(String),
      commonName: 'Bluefin Tuna',
      scientificName: 'Thunnus thynnus',
      isEndangered: true,
      conservationStatus: 'endangered'
    })
  });

  it('should be able to get all instances of Animal from animals', async () => {
    const animal = await Animal.insert({
      commonName: 'Bluefin Tuna',
      scientificName: 'Thunnus thynnus',
    })

    const res = await request(app)
      .get('/api/v1/animals');

    expect(res.body).toEqual([
      {
        id: expect.any(String),
        commonName: 'Orangutan',
        scientificName: 'Pongo abelii, Pongo pygmaeus',
        isEndangered: true,
        conservationStatus: 'critically endangered'
      },
      {
        id: expect.any(String),
        commonName: 'Bluefin Tuna',
        scientificName: 'Thunnus thynnus',
        isEndangered: null,
        conservationStatus: null
      }
    ])
  });

  it('should be able to get a single instance of Animal by id from animals', async () => {
    const animal = await Animal.insert({
      commonName: 'Bluefin Tuna',
      scientificName: 'Thunnus thynnus',
    });

    const res = await request(app)
      .get(`/api/v1/animals/${animal.id}`);
    
    expect(res.body).toEqual({ ...animal });
  });

});