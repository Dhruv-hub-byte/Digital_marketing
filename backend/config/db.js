const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "crm_db",
  password: "komal004",
  port: 5432,
});

pool.connect()
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log("Database Connection Failed");
    console.log(err.message);
  });

module.exports = pool;