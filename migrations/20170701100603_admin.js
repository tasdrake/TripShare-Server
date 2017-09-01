
exports.up = (knex) => {
  return knex.schema.createTable('admin', table => {
    table.increments('id');
    table.string('name');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('admin');
};
