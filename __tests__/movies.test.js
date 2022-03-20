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

    const res = await request(app)
      .get(`/api/v1/movies/${movie.id}`);
    
    expect(res.body).toEqual(movie);
  });

  it('should be able to update an instance of Movie by id from movies', async () => {
    const movie = await Movie.insert({
      title: 'Jaw breaker',
      director: 'Unknown',
      year: 1000
    });

    const res = await request(app)
      .patch(`/api/v1/movies/${movie.id}`)
      .send({
      title: 'Jawbreaker',
      director: 'Darren Stein',
      year: 1999,
      starring: ['Natasha Lyonne', 'Clea DuVall', 'Cathy Moriarty', 'RuPaul Charles', 'Mink Stole', 'Bud Cort', 'Eddie Cibrian']
      });
    
    
    const expected = {
      id: expect.any(String),
      title: 'Jawbreaker',
      director: 'Darren Stein',
      year: 1999,
      starring: ['Natasha Lyonne', 'Clea DuVall', 'Cathy Moriarty', 'RuPaul Charles', 'Mink Stole', 'Bud Cort', 'Eddie Cibrian']
      }

    expect(res.body).toEqual(expected);
    expect(await Movie.getById(movie.id)).toEqual(expected);

      const res2 = await request(app)
      .patch(`/api/v1/movies/${movie.id}`)
      .send({
      starring: []
      });
    
    const expected2 = {
      id: expected.id,
      title: 'Jawbreaker',
      director: 'Darren Stein',
      year: 1999,
      starring: []
    }
    
    expect(res2.body).toEqual(expected2);
    expect(await Movie.getById(movie.id)).toEqual(expected2);
  });

  it('should be able to delete an instance of Movie by id from movies', async () => {
    const movie = await Movie.insert({
      title: 'Jawbreaker',
      director: 'Darren Stein',
      year: 1999
    });
    
    const res = await request(app)
      .delete(`/api/v1/movies/${movie.id}`);
    
    expect(res.body).toEqual(movie);
    expect(await Movie.getById(movie.id)).toBe(null);
  });

});
