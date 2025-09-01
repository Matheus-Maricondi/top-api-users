import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "db-top-users",
      port: 5432,
      user: "top-users",
      password: "123456",
      database: "top_users",
    },
    migrations: {
      directory: "./database/migrations",
      extension: "ts",
    },
    seeds: {
      directory: "./database/seeds",
      extension: "ts",
    },
  },
};

export default config;
