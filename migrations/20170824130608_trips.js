exports.up = (knex) => {
  return knex.schema.createTable('trips', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.boolean('completed').defaultTo(false);
    table.string('image_url').defaultTo('https://cdn.pixabay.com/photo/2016/07/30/00/03/mountain-road-1556177_1280.jpg');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('trips');
};
