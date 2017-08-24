exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments('user_id');
    table.integer('amount').defaultTo(0);
    table.boolean('paid').defaultTo(false);
    table.string('image_url').defaultTo('https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png');
    table.integer('trip_id').index().references('trip_id').inTable('trips').onDelete('cascade').notNull();
    // table.foreign('trip_id').references('trips.trip_id');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
