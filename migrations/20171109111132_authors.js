
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('authors', (table) => {
            table.increments()
            table.string('firstname')
            table.string('lastname')
            table.text('biography')
            table.string('url')
        })
    ])
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('authors')
};
