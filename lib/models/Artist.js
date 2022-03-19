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

  }

  static async getById(id) {

  }

  static async updateById(id, attributes) {

  }

  static async deleteById(id) {

  }
};