
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'pear', avgWeightOz: 1.2 },
        { name: 'pear', avgWeightOz: 1.2, delicious: 1 },
        { name: 'pear', avgWeightOz: 1.2, delicious: false }
      ]);
    });
};
