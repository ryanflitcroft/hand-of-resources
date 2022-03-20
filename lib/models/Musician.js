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

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        musicians
      WHERE
        id=$1
      `,
      [id]
    );

    if (!rows[0]) return null;
    return new Musician(rows[0]);
  }

  static async updateById(id, attributes) {
    const musician = await Musician.getById(id);
    const updated = { ...musician, ...attributes };
    const {
      name,
      genres,
      discography
    } = updated;

    const { rows } = await pool.query(
      `
      UPDATE
        musicians
      SET
        name=$2, genres=$3, discography=$4
      WHERE
        id=$1
      RETURNING
        *
      `,
      [id, name, genres, discography]
    );

    if (!rows[0]) return null;
    return new Musician(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        musicians
      WHERE
        id=$1
      RETURNING
        *
      `,
      [id]
    );

    if (!rows[0]) return null;
    return new Musician(rows[0]);
  }

};