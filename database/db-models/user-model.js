const db = require("../dbConfig.js");
module.exports = {
  addUser,
  findById,
  findBy
};

function findById(id) {
  return db("users")
    .select("username")
    .where("id", id)
    .first();
}
async function addUser(user) {
  const [id] = await db("users")
    .insert(user)
    .returning("id");

  return findById(id);
}

function findBy(filter) {
  return db("users").where(filter);
}
