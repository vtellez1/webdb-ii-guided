
exports.up = function(knex) {
  // create the fruits table
  return knex.schema.createTable('fruits', table => {
    table.increments() // create column named "id", primary key, auto-incrementing
    table.text('name', 128).unique().notNullable()
    table.decimal('avgWeightOz').notNullable()
    table.boolean('delicious')
  })
};

exports.down = function(knex) {
  // destroy the fruits table if it exists
  return knex.schema.dropTableIfExists('fruits')
};
