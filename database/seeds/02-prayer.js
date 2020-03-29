exports.seed = function(knex) {
  return knex("prayers").insert([
    { name: "Fajr", prayer_time: "8:30", time_id: 1 },
    { name: "Zuhr", prayer_time: "2:00", time_id: 2 },
    { name: "Asr", prayer_time: "5:00", time_id: 2 },
    { name: "Maghrib", prayer_time: "7:30", time_id: 2 },
    { name: "Isha", prayer_time: "9:30", time_id: 2 },
    { name: "Juma", prayer_time: "2:30", time_id: 2 }
  ]);
};
