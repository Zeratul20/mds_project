const config = {
  client: "mysql",
  version: '5.7',
  connection: {
    // ssl: { rejectUnauthorized: false },
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  useNullAsDefault: true,
  ssl: false,
};

const knex = require("knex")(config);

module.exports = { knex, config };
