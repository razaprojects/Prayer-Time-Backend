exports.seed = function(knex) {
  return knex("time").insert([{ hour: "AM" }, { hour: "PM" }]);
};
