const sqlite3 = require("sqlite3").verbose();
export {}

const db = new sqlite3.Database(
  "./collection.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err:any) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

db.serialize(() => {

  db.run(
    `CREATE TABLE IF NOT EXISTS booked (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT,
        tickets TEXT,
        no.tickets int
        price int
      )`,
    (err:any) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created items table.");
    })})