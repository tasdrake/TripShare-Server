
exports.seed = (knex) => {
  return knex('admin').del()
    .then(() => {
      return knex('admin').insert([
        {id: 1, name: 'Tas Drake'}
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('admin_id_seq', (SELECT MAX(id) FROM admin))");
    });
};
