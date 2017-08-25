exports.seed = (knex) => {
  return knex('users').del().then(() => {
    return knex('users').insert([
      {
        id: 1,
        name: 'Tas',
        amount: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 2,
        name: 'Emmy',
        amount: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 3,
        name: 'Wade',
        amount: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 4,
        name: 'Ali',
        amount: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 5,
        name: 'Mark',
        amount: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 6,
        name: 'Philip',
        amount: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 7,
        name: 'Andi',
        amount: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 8,
        name: 'Wade',
        amount: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 9,
        name: 'Tas',
        amount: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 2
      }, {
        id: 10,
        name: 'Cody',
        amount: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 2
      }
    ]);
  }).then(() => {
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
  });
};
