const pool = require('../utils/pool');

module.exports = class Concerts {
  id;
  artist;
  venue;
  calendar;
  calendarTime;

  constructor(row) {
    this.id = row.id;
    this.artist = row.artist;
    this.venue = row.venue;
    this.calendar = row.calendar;
    this.calendarTime = row.calendarTime;
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