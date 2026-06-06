const { Pool } = require("pg");

//local//
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "digital_marketing",
//   password: "Cybo#2006",
//   port: 5432,
// });

//online//
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});



module.exports = pool;