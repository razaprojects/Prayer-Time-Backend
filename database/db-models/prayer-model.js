const db = require("../dbConfig.js");
module.exports = {
  getPrayers,
  updateTime
};

function getPrayers() {
  return db("prayers as p")
    .join("time as t", "t.id", "p.time_id")
    .select("p.id", "p.name", "p.prayer_time", "t.hour as hour");
}

function updateTime(id, newTime) {
  return db("prayers")
    .where({ id })
    .update(newTime);
}
