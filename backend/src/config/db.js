const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "digital_marketing",
  password: "Cybo#2006",
  port: 5432,
});

module.exports = pool;