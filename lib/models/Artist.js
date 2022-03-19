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
    
  static async insert() {
  
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