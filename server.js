const express = require("express");
const app = express();
const port = 3000;
const db = require("./database.js");

app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log(" Server läuft auf http://localhost:" + port);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/Bewerberdaten", (req, res) => {
  let sql = "SELECT * FROM bewerber ORDER BY nachname";
  let params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "success", data: rows });
  });
});
