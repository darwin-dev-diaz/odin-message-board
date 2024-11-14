const { argv } = require("node:process");
const { Client } = require("pg");
require("dotenv").config();

const testSQL = `CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(10) NOT NULL,
    message VARCHAR(255) NOT NULL,
    time VARCHAR(255) NOT NULL
  );
  
  INSERT INTO messages (username, message, time)
  VALUES
    ('Darwin', 'test message', 'Nov 8, 12:25 AM');`;

const createTableSQL = `CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(10) NOT NULL,
  message VARCHAR(255) NOT NULL,
  time VARCHAR(255) NOT NULL
);`;

const insertSQL = `INSERT INTO messages (username, message, time)
VALUES
  ('Darwin', 'Don''t give up. We are so close to finishing TOP. I know you''ll land your software job. You didn''t come this far to give up. ✅ 👍', 'Nov 8, 12:25 AM'),
  ('Bobby HR', 'Join us for the annual company picnic next Friday at Central Park. There will be games, food, and fun activities for everyone. Family members are welcome. Please RSVP by Wednesday so we can finalize the arrangements.', 'Nov 8, 12:25 AM'),
  ('Joe Schmoe', 'The system will be down for maintenance on Saturday from 2 AM to 6 AM. During this time, you will not be able to access the network or any online services. Please save your work and log off before the maintenance period.', 'Nov 8, 12:25 AM'),
  ('Jane CFO', 'Don''t forget about the meeting scheduled for tomorrow at 10 AM in the main conference room. We will be discussing the project timelines and assigning new tasks. Your presence is highly appreciated.', 'Nov 8, 12:25 AM'),
  ('Amando', 'Hi there! 🤣', 'Nov 8, 12:25 AM'),
  ('Charles', 'Hello World! 🤓 🌍', 'Nov 8, 12:25 AM'),
  ('Darwin', 'The deployment is WORKING!', 'Nov 8, 12:26 AM'),
  ('who knows', 'not bad 💀', 'Nov 8, 12:26 AM'),
  ('lola', 'hiii', 'Nov 8, 12:36 AM'),
  ('pakaz', 'hello', 'Nov 8, 12:47 AM'),
  ('luke', 'yo', 'Nov 8, 1:02 AM'),
  ('Odin', 'great job', 'Nov 8, 3:15 AM'),
  ('Tech', 'This is a very nice one', 'Nov 8, 4:02 AM'),
  ('yaniv', 'good good', 'Nov 8, 7:04 AM'),
  ('hh', 'nc', 'Nov 8, 8:52 AM'),
  ('boo', 'yo', 'Nov 8, 10:03 AM'),
  ('sdfasf', 'asdfasdf', 'Nov 8, 2:54 PM'),
  ('lamine', 'looks nice', 'Nov 8, 3:12 PM'),
  ('abc', 'hi', 'Nov 8, 11:54 PM'),
  ('Mohamed', 'Heyyyyy', 'Nov 9, 9:42 PM'),
  ('Mohamed', 'How is everyone''s progress on the TOP', 'Nov 10, 12:00 AM'),
  ('Darwin', 'So far so good. Almost done', 'Nov 14, 3:28 PM');`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      argv[0] ||
      `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/messages_db`,
  });

  try {
    await client.connect();
    await client.query(createTableSQL);
    await client.query(insertSQL);
    console.log("done seeding");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.end();
  }
}

main();
