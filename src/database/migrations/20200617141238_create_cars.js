
exports.up = function (knex) {
    return knex.schema.createTable('cars', (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.biginteger('user_id').notNullable().unsigned();

        table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('cars');
};
