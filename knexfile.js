'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : 'localhost',
      database : 'bookshelf_dev'
    }
  },

  test: {
    client: 'pg',
    connection: {
      host : 'localhost',
      database : 'bookshelf_test'
    }
  },

  production: {}
};
