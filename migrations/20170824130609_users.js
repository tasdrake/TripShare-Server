exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.integer('phone').notNullable();
    table.integer('amount_spent').defaultTo(0);
    table.integer('amount_owed').defaultTo(0);
    table.boolean('paid').defaultTo(false);
    table.string('image_url').defaultTo('https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png');
    table.integer('trip_id').index().references('id').inTable('trips').onDelete('cascade').notNull();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
