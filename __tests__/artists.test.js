const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Artist = require('../lib/models/Artist');

describe('hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to insert an instance of Artist to artists', async () => {
    const res = await request(app)
      .post('/api/v1/artists')
      .send({
        name: 'Frida Kahlo',
        born: 1907,
        died: 1954,
        works: ['Self-Portrait with Thorn Necklace and Hummingbird', 'The Two Fridas', 'Self Portrait with Cropped Hair', 'Broken Column', 'The Wounded Deer', 'My Grandparents, My Parents, and I', 'Self-Portrait on the Borderline Between Mexico and the United States', 'Frieda and Diego Rivera', 'Without Hope', 'Self-Portrait as a Tehuana']
      });
    
    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'Frida Kahlo',
      born: 1907,
      died: 1954,
      works: ['Self-Portrait with Thorn Necklace and Hummingbird', 'The Two Fridas', 'Self Portrait with Cropped Hair', 'Broken Column', 'The Wounded Deer', 'My Grandparents, My Parents, and I', 'Self-Portrait on the Borderline Between Mexico and the United States', 'Frieda and Diego Rivera', 'Without Hope', 'Self-Portrait as a Tehuana']
    });
  });
  
});