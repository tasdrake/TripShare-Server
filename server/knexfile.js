module.exports = {
  development: {
    client: 'pg',
    database: process.env.DATABASE_URL || 'trip-share'
  },
  production:{
    client: 'pg',
    database: process.env.DATABASE_URL
  },
  test: {
    client: 'pg',
    database: process.env.DATABASE_URL || 'trip-share-test',
  }
};
