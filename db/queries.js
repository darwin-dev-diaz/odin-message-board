const pool = require("./pool");

async function getAllMessages() {
  const {rows} = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage() {}

async function deleteData() {}

module.exports = {
  getAllMessages,
  addMessage,
  deleteData,
};
