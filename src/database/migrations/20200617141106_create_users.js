
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.string('id').primary().notNullable();
        table.string('name').notNullable();
        table.string('surname').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.droTable('users');
};
