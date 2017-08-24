  module.exports = {
    development: {
      client: 'pg',
      connection: {
        database: process.env.DATABASE_URL || 'trip-share'
      }
    },
    production:{
      client: 'pg',
      connection: process.env.DATABASE_URL
    },
    test: {
      client: 'pg',
      connection: {
        database: process.env.DATABASE_URL || 'trip-share-test'
      }
    }
  };
