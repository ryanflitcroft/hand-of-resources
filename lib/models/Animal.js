const pool = require('../utils/pool');

module.exports = class Animal {
  id;
  commonName;
  scientificName;
  isEndangered;
  conservationStatus;

  constructor(row) {
    this.id = row.id;
    this.commonName = row.common_name;
    this.scientificName = row.scientific_name;
    this.isEndangered = row.is_endangered;
    this.conservationStatus = row.conservation_status;
  }

  static async insert({
    commonName,
    scientificName,
    isEndangered = null,
    conservationStatus = null
  }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        animals (common_name, scientific_name, is_endangered, conservation_status)
      VALUES
        ($1, $2, $3, $4)
      RETURNING
        *
      `,
      [commonName, scientificName, isEndangered, conservationStatus]
    );
    return new Animal(rows[0]);
  }
  
  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        animals
      `
    )

    return rows.map((row) => new Animal(row));
  }
  
  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        animals
      WHERE
        id=$1
      `,
      [id]
    );

    if (!rows[0]) return null;
    return new Animal(rows[0]);
  }
  
  static async updateById(id, attributes) {
    const animal = await Animal.getById(id);
    const updated = { ...animal, ...attributes }
    const {
      commonName,
      scientificName,
      isEndangered,
      conservationStatus
    } = updated;

    const { rows } = await pool.query(
      `
      UPDATE
        animals
      SET
        common_name=$2, scientific_name=$3, is_endangered=$4, conservation_status=$5
      WHERE
        id=$1
      RETURNING
        *
      `,
      [id, commonName, scientificName, isEndangered, conservationStatus]
    );

    if (!rows[0]) return null;
    return new Animal(rows[0]);
  }

  static async deleteById() {

  }
};