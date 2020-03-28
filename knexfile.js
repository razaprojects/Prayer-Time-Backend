require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_URL,
    migration: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/migrations"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DB_URL,
    migration: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
