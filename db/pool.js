const { Pool } = require("pg");
require("dotenv").config();

// local db
module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
});
