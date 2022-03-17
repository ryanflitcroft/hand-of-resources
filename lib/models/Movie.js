const pool = require('../utils/pool');

module.exports = class Movie {
  id;
  title;
  director;
  year;
  cast;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.director = row.director;
    this.year = row.year;
    this.cast = row.cast;
  }

  static async insert() {
    
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
