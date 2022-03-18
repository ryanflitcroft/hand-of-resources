const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Movie = require('../lib/models/Movie');

describe('hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to insert an instance of Movie to movies', async () => {
    const res = await request(app)
      .post('/api/v1/movies')
      .send({
        title: 'Jawbreaker',
        director: 'Darren Stein',
        year: 1999
      });
    
    expect(res.body).toEqual({
      id: expect.any(String),
      title: 'Jawbreaker',
      director: 'Darren Stein',
      year: 1999,
      starring: expect.any(Array)
    });
  });

  it('should be able to get all instances of Movie from movies', async () => {
    const movie = await Movie.insert({
        title: 'Jawbreaker',
        director: 'Darren Stein',
        year: 1999
      })
    const res = await request(app)
      .get('/api/v1/movies');
    
    expect(res.body).toEqual([
      {
        id: expect.any(String),
        title: 'But I\'m a Cheerleader',
        director: 'Jamie Babbit',
        year: 1999,
        starring: ['Natasha Lyonne', 'Clea DuVall', 'Cathy Moriarty', 'RuPaul Charles', 'Mink Stole', 'Bud Cort', 'Eddie Cibrian']
      },
      {
        id: expect.any(String),
        title: 'Jawbreaker',
        director: 'Darren Stein',
        year: 1999,
        starring: expect.any(Array)
      }
    ]);

  });

  it('should be able to get a single instance of Movie by id from movies', async () => {
    const movie = await Movie.insert({
      title: 'Jawbreaker',
      director: 'Darren Stein',
      year: 1999
    });

    const movies = await Movie.getById(movie.id);
    expect(movies).toEqual({
      id: expect.any(String),
      ...movie,
      starring: expect.any(Array)
    });
  });

  it('should be able to update an instance of Movie by id from movies', async () => {

  });

  it('should be able to delete an instance of Movie by id from movies', async () => {

  });

});
