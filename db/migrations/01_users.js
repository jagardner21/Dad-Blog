
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('website');
        table.string('created_at').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
