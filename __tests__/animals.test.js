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
        scientificName: 'Thunnus Thynnus',
        isEndangered: true,
        conservationStatus: 'endangered'
      });
    
    expect(res.body).toEqual({
      id: expect.any(String),
      commonName: 'Bluefin Tuna',
      scientificName: 'Thunnus Thynnus',
      isEndangered: true,
      conservationStatus: 'endangered'
    })
  });

});