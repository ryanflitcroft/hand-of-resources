const pool = require('../utils/pool');

module.exports = class Musician {
  id;
  name;
  genre;
  discography;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.genres = row.genres;
    this.discography = row.discography;
  }

  static async insert({
    name,
    genres,
    discography
  }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        musicians (name, genres, discography)
      VALUES
        ($1, $2, $3)
      RETURNING
        *
      `,
      [name, genres, discography]
    );

    return new Musician(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        musicians
      `
    );

    return rows.map((row) => new Musician(row));
  }

  static async getById() {

  }

  static async updateById() {

  }

  static async deleteById() {

  }

};