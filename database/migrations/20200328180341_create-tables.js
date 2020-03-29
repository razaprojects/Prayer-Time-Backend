exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
    })
    .createTable("time", tbl => {
      tbl.increments();
      tbl
        .string("hour", 128)
        .notNullable()
        .unique();
    })
    .createTable("prayers", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
      tbl.time("prayer_time", { precision: 0 }).notNullable();
      tbl
        .integer("time_id")
        .notNullable()
        .unsigned()
        .references("time.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("prayers")
    .dropTableIfExists("time")
    .dropTableIfExists("users");
};
