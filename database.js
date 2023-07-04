const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "Bewerber.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log("Connected to the database.");
});

db.serialize(() => {
  db.run(`
    DROP TABLE IF EXISTS bewerber
  `);

  db.run(`
    CREATE TABLE bewerber (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nachname TEXT NOT NULL,
      vorname TEXT,
      geburtsdatum TEXT,
      adresse TEXT,
      email TEXT,
      telefon TEXT,
      position TEXT,
      unternehmen TEXT,
      zeitraum TEXT,
      beschreibung TEXT,
      abschluss TEXT,
      universitaet TEXT,
      akadem_zeitraum TEXT,
      akadem_beschreibung TEXT,
      faehigkeiten TEXT
    )
  `);

  // Beispiel-Datensatz einfügen
  db.run(`
    INSERT INTO bewerber (
      nachname,
      vorname,
      geburtsdatum,
      adresse,
      email,
      telefon,
      position,
      unternehmen,
      zeitraum,
      beschreibung,
      abschluss,
      universitaet,
      akadem_zeitraum,
      akadem_beschreibung,
      faehigkeiten
    ) VALUES (
      'Hajrizaj',
      'Albinot',
      '01.01.1990',
      'Musterstraße 123, 12345 Musterstadt',
      'max.mustermann@example.com',
      '1234567890',
      'Softwareentwickler',
      'ABC Software GmbH',
      'Januar 2015 - heute',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Master Informatik',
      'XYZ Universität',
      'Oktober 2012 - Dezember 2014',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'JavaScript, HTML/CSS, Python, SQL'
    )
  `);
});

module.exports = db;
