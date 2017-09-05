exports.seed = (knex) => {
  return knex('trips').del().then(() => {
    return knex('trips').insert([
      {
        id: 1,
        name: 'Coachella',
        completed: false,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Coachella_2012_weekend_2_day_2_sunset.jpg',
        admin_id: 1,
      }, {
        id: 2,
        name: 'Eclipse Adventure',
        completed: false,
        image_url: '../css/road.jpg',
        admin_id: 1,
      }
    ]);
  }).then(() => {
    return knex.raw("SELECT setval('trips_id_seq', (SELECT MAX(id) FROM trips))");
  });
};

// default: https://cdn.pixabay.com/photo/2016/07/30/00/03/mountain-road-1556177_1280.jpg
