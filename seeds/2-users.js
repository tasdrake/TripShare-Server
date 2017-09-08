exports.seed = (knex) => {
  return knex('users').del().then(() => {
    return knex('users').insert([
      {
        id: 1,
        name: 'Tas',
        phone: 1111111111,
        amount_spent: 100.50,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 2,
        name: 'Emmy',
        phone: 1111111111,
        amount_spent: 20.93,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 3,
        name: 'Wade',
        phone: 1111111111,
        amount_spent: 50.53,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 4,
        name: 'Ali',
        phone: 1111111111,
        amount_spent: 100.24,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 5,
        name: 'Mark',
        phone: 1111111111,
        amount_spent: 50.42,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 6,
        name: 'Philip',
        phone: 1111111111,
        amount_spent: 40.45,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 7,
        name: 'Andi',
        phone: 1111111111,
        amount_spent: 40.14,
        amount_owed: 0,
        paid: false,
        image_url: 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png',
        trip_id: 1
      }, {
        id: 9,
        name: 'Tas',
        phone: 1111111111,
        amount_spent: 200.61,
        amount_owed: 0,
        paid: false,
        image_url: 'https://i.pinimg.com/736x/1f/ca/b7/1fcab76660158853a7109696c0e1cf40--animated-cartoon-characters-animated-cartoons.jpg',
        trip_id: 2
      }, {
        id: 10,
        name: 'Cody',
        phone: 1111111111,
        amount_spent: 180.93,
        amount_owed: 0,
        paid: false,
        image_url: 'https://i.pinimg.com/236x/72/0d/bb/720dbbdca12786c152e6da86936980f7--colorado-rockies-iron-on-transfer.jpg',
        trip_id: 2
      }
    ]);
  }).then(() => {
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
  });
};
