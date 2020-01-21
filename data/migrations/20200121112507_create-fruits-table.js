
exports.up = function(knex) {
  // create the fruits table
  return knex.schema.createTable('fruits', table => {
    table.increments() // create column named "id", primary key, auto-incrementing
  })
};

exports.down = function(knex) {
  // destroy the fruits table if it exists
};
