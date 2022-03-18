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
    console.log('rows---', rows[0]);
    return new Animal(rows[0]);
  }
  
  static async getAll() {
  
  }
  
  static async getById() {
  
  }
  
  static async updateById() {
  
  }

  static async deleteById() {

  }
};