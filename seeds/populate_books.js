
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('books').insert({
            title: 'rowValue1',
            author: 'jkRowling',
            genre: 'fantasy',
            description: 'cool wizards',
            cover_url: 'www.google.com'
        }),
        knex('books').insert({
            title: 'harry potter',
            author: 'jkRowling',
            genre: 'fantasy',
            description: 'cool wizards',
            cover_url: 'www.google.com'
        }),
      ]);
    });
};
