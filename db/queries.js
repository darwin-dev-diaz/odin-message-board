const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage(username, message, time) {
  await pool.query(
    "INSERT INTO messages (username, message, time) VALUES ($1, $2, $3)",
    [username, message, time],
  );
}

async function deleteData() {}

module.exports = {
  getAllMessages,
  addMessage,
  deleteData,
};
