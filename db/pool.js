const { Pool } = require("pg");
require("dotenv").config();

// local db
module.exports = new Pool({
  connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/messages_db`,
});

// server db
// module.exports = new Pool({
//   connectionString: `postgresql://postgres:aCwasiPXcPePudgWUfiGcseCbEgQYJIV@junction.proxy.rlwy.net:18666/railway`,
// });
