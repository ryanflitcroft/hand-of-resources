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