
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('books', (table) => {
            table.increments()
            table.string('title')
            table.string('genre')
            table.text('description')
            table.string('url')
        })
    ])
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('books')
};
