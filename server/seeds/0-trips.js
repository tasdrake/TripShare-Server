exports.seed = (knex, Promise) => {
  return knex('trips').del()
    .then(() => {
      return knex('trips').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('trips_id_seq', (SELECT MAX(id) FROM trips))");
    });
};
