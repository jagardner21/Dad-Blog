
exports.up = function (knex) {
    return knex.schema.createTable('posts', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('body').notNullable();
        table.integer('user_id').references('id').inTable('users').notNullable();
        table.string('created_at').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('posts');
};
