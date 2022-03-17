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

  });

  it('should be able to get all instances of Movie from movies', async () => {

  });

  it('should be able to get a single instance of Movie by id from movies', async () => {

  });

  it('should be able to update an instance of Movie by id from movies', async () => {

  });

  it('should be able to delete an instance of Movie by id from movies', async () => {

  });

});
