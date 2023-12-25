const sqlite3 = require("sqlite3").verbose();


const db = new sqlite3.Database(
  "./collection.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

db.serialize(() => {
    db.run(`SELECT * FROM seats WHERE (seat) VALUES ($1)`)
    //band = band from the post request 
        if (err) {
          return console.error(err.message);
        }
})