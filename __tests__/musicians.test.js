const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Musician = require('../lib/models/Musician');

describe('hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end()
  });

  it('should be able to insert an instance of Musician to musicians', async () => {
    const res = await request(app)
      .post('/api/v1/musicians')
      .send({
        name: 'Ellie Goulding',
        genres: ['electropop', 'synth-pop', 'indie pop', 'folktronica'],
        discography: ['Lights', 'Halcyon', 'Delirium', 'Brightest Blue']
      });
    
    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'Ellie Goulding',
      genres: ['electropop', 'synth-pop', 'indie pop', 'folktronica'],
      discography: ['Lights', 'Halcyon', 'Delirium', 'Brightest Blue']
    });
  });

  it('should be able to get all instances of Musician from musicians', async () => {
    const musician = await Musician.insert({
      name: 'Ellie Goulding',
      genres: ['electropop', 'synth-pop', 'indie pop', 'folktronica'],
      discography: ['Lights', 'Halcyon', 'Delirium', 'Brightest Blue']
    });

    const res = await request(app)
      .get('/api/v1/musicians');

    expect(res.body).toEqual([
      {
        id: expect.any(String),
        name: 'Lissie',
        genres: ['rock', 'pop', 'country', 'folk'],
        discography: ['Catching a Tiger', 'Back to Forever', 'My Wild West', 'Castles']
      },
      { ...musician }
    ]);

  });
});