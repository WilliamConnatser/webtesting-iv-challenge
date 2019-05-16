
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bullion', tbl => {
    tbl.increments();

    tbl.string('type',56)
    .notNullable();

    tbl.integer('ounces')
    .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists();
};
