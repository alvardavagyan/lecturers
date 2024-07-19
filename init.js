const Database = require("better-sqlite3")
const db = new Database("lecturers.db")


db.exec(`
    CREATE TABLE IF NOT EXISTS lecturers(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        salary INTEGER 
    
    )

`)