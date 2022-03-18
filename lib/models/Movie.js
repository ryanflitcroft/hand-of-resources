const pool = require('../utils/pool');

module.exports = class Movie {
  id;
  title;
  director;
  year;
  starring;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.director = row.director;
    this.year = row.year;
    this.starring = row.starring;
  }

  static async insert({
    title,
    director,
    year,
    starring = []
  }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        movies (title, director, year, starring)
      VALUES
        ($1, $2, $3, $4)
      RETURNING
        *
      `,
      [title, director, year, starring]
    );
    
    return new Movie(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        movies
      `
    );

    return rows.map((row) => new Movie(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        movies
      WHERE
        id=$1
      `,
      [id]
    );

    if (!rows[0]) return null
    return new Movie(rows[0]);
  }

  static async updateById() {

  }

  static async deleteById() {

  }
};
