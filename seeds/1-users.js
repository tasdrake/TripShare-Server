exports.seed = (knex) => {
  return knex('users').del().then(() => {
    return knex('users').insert([
      {
        id: 1,
        name: 'Tas',
        phone: 0,
        amount_spent: 100,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 2,
        name: 'Emmy',
        phone: 0,
        amount_spent: 20,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 3,
        name: 'Wade',
        phone: 0,
        amount_spent: 50,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 4,
        name: 'Ali',
        phone: 0,
        amount_spent: 100,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 5,
        name: 'Mark',
        phone: 0,
        amount_spent: 50,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 6,
        name: 'Philip',
        phone: 0,
        amount_spent: 40,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 7,
        name: 'Andi',
        phone: 0,
        amount_spent: 40,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 9,
        name: 'Tas',
        phone: 0,
        amount_spent: 200,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 2
      }, {
        id: 10,
        name: 'Cody',
        phone: 0,
        amount_spent: 180,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 2
      }
    ]);
  }).then(() => {
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
  });
};
