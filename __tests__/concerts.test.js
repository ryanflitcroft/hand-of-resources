const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Concert = require('../lib/models/Concert');
const { insert } = require('../lib/models/Concert');

describe('hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to insert an instance of Concert to concerts', async () => {
    const res = await request(app)
      .post('/api/v1/concerts')
      .send({
        artist: 'Girl Talk',
        venue: 'Crystal Ballroom',
        calendar: 20220414,
      });
    
    expect(res.body).toEqual({
      id: expect.any(String),
      artist: 'Girl Talk',
      venue: 'Crystal Ballroom',
      calendar: 20220414,
    });
  });

  it('should be able to get all instances of Concert from concerts', async () => {
    const concert = await Concert.insert({
      artist: 'Girl Talk',
      venue: 'Crystal Ballroom',
      calendar: 20220414,
    });

    const res = await request(app)
      .get('/api/v1/concerts');
    
    expect(res.body).toEqual([
      {
        id: expect.any(String),
        artist: 'Cat Power',
        venue: 'Roseland Theater',
        calendar: 20220722
      },
      { ...concert }
    ]);
  });

  it('should be able to get a single instance of Concert by id from concerts', async () => {
    const concert = await Concert.insert({
      artist: 'Girl Talk',
      venue: 'Crystal Ballroom',
      calendar: 20220414,
    });

    const res = await request(app)
      .get(`/api/v1/concerts/${concert.id}`);
    
    expect(res.body).toEqual({ ...concert });
  });

  it('should be able to update a single instance of concert by id from concerts', async () => {
    const concert = await Concert.insert({
      artist: 'Girl Talk',
      venue: 'unknown',
      calendar: 4142022
    });

    const res = await request(app)
      .patch(`/api/v1/concerts/${concert.id}`)
      .send({
        venue: 'Crystal Ballroom',
        calendar: 20220414,
      });
    
    expect(res.body).toEqual({
      id: expect.any(String),
      artist: 'Girl Talk',
      venue: 'Crystal Ballroom',
      calendar: 20220414,
    });
  });

  it('should be able to delete an instance of Concert by id from concerts', async () => {
    const concert = await Concert.insert({
      artist: 'Girl Talk',
      venue: 'Crystal Ballroom',
      calendar: 20220414,
    });

    const res = await request(app)
      .delete(`/api/v1/concerts/${concert.id}`);
    
    expect(res.body).toEqual({ ...concert });
    expect(await Concert.getById(concert.id)).toBe(null);
  });
  
});