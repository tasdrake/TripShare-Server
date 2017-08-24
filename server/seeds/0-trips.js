exports.seed = (knex) => {
  return knex('trips').del().then(() => {
    return knex('trips').insert([
      {
        id: 1,
        name: '',
        completed: false,
        image_url: 'https://cdn.pixabay.com/photo/2016/07/30/00/03/mountain-road-1556177_1280.jpg'
      }, {
        id: 2,
        name: 'Eclipse Adventure',
        completed: false,
        image_url: 'https://cdn.pixabay.com/photo/2016/07/30/00/03/mountain-road-1556177_1280.jpg'
      }
    ]);
  }).then(() => {
    return knex.raw("SELECT setval('trips_id_seq', (SELECT MAX(id) FROM trips))");
  });
};
