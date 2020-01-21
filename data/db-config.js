// this is the file that has knowledge of knex
// this is the file where we bring in a configuration
// this is the file where we expose "db" to the outer world
// "db('fruits').insert()..."
const knex = require('knex')
const configuration = require('../knexfile').development

module.exports = knex(configuration)
