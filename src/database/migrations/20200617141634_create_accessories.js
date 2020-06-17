
exports.up = function(knex) {
    return knex.schema.createTable('accessories', (table) => {
        table.increments('id');
        table.string('brand').notNullable();
        table.string('model').notNullable();
        table.float('motor', 2).notNullable();
        table.bigInteger('hp').notNullable();
        table.bigInteger('version_year').notNullable();
        table.bigInteger('launch_price').notNullable();
        table.float('urban_consumption', 2).notNullable();
        table.float('road_consumption', 2).notNullable();
        table.bigInteger('car_id').notNullable().unsigned();

        table.foreign('car_id').references('id').inTable('cars');
    });
};

exports.down = function(knex) {
    knex.schema.dropTable('accessories');
};
