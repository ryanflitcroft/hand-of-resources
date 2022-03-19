const pool = require('../utils/pool');

module.exports = class Concert {
  id;
  artist;
  venue;
  calendar;

  constructor(row) {
    this.id = row.id;
    this.artist = row.artist;
    this.venue = row.venue;
    this.calendar = row.calendar;
  }

  static async insert({
    artist,
    venue,
    calendar,
  }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        concerts (artist, venue, calendar)
      VALUES
        ($1, $2, $3)
      RETURNING
        *
      `,
      [artist, venue, calendar]
    );

    return new Concert(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        concerts
      `
    );

    return rows.map((row) => new Concert(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        concerts
      WHERE
        id=$1
      `,
      [id]
    );

    return new Concert(rows[0]);
  }

  static async updateById() {

  }

  static async deleteById() {

  }
  
};