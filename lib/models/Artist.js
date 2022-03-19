const pool = require('../utils/pool');

module.exports = class Artist {
  id;
  name;
  born;
  died;
  works;
    
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.born = row.born;
    this.died = row.died;
    this.works = row.works;
  }
    
  static async insert({
    name,
    born,
    died = null,
    works = []
  }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        artists (name, born, died, works)
      VALUES
        ($1, $2, $3, $4)
      RETURNING
        *
      `,
      [name, born, died, works]
    );

    return new Artist(rows[0]);
  }
    
  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        artists
      `
    );

    return rows.map((row) => new Artist(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        artists
      WHERE
        id=$1
      `,
      [id]
    );

    return new Artist(rows[0]);
  }

  static async updateById(id, attributes) {
    const movie = await Artist.getById(id);
    const updated = { ...movie, ...attributes };
    const {
      name,
      born,
      died,
      works
    } = updated;
    const { rows } = await pool.query(
      `
      UPDATE
        artists
      SET
        name=$2, born=$3, died=$4, works=$5
      WHERE
        id=$1
      RETURNING
        *
      `,
      [id, name, born, died, works]
    );

    return new Artist(rows[0]);
  }

  static async deleteById(id) {

  }
};