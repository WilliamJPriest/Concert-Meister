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

  db.run(
    `CREATE TABLE IF NOT EXISTS seats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        band TEXT,
        seat TEXT,
        date TEXT,
        price int,
        Expires int,
        booked int
      )`, 
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created items table.");
    })

    let numberOfSeats = 5
    const seatingRow =["A", "B","C"]
    for(let i = 0;i<seatingRow.length;i++){
      for(let j =0; j < numberOfSeats;j++){
        db.run(`INSERT INTO seats (seat) VALUES ($1)`,[i]+[j],function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; 
          console.log(`Rows inserted, ID ${id}`);
        })
      }
    }
  db.close((err)=>{
    if(err){
      return console.error(err)
    }
    console.log("db closed")
  })

})
    