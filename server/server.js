const express = require("express");
const app = express();
const port = process.env.PORT || 5555;
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser')


const db = mysql.createConnection({
  host: "eu-cdbr-west-02.cleardb.net",
  user: "b1cb66ffd9368e",
  password: "822dff14",
  database: "heroku_462665c36d4d83f",
});

app.use(cors())
app.use(express.json());
app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const myQuery = "SELECT * FROM admin";

  db.query(myQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result) {
        res.status(200).send(result);
      }
    }
  });
});

app.post("/create", (req, res) => {
  const {title} = req.body;

  const myQuery = "INSERT INTO admin (title) VALUES (?)";

  db.query(myQuery, [title], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send("sikeres felvétel az adatbázisba!");
    }
  });
});

app.put("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;

  const myQuery = `  UPDATE admin SET title = '${title}' WHERE id=${id}`;

  db.query(myQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send({ message: "felhasználó törölve" });
  });
});

app.get("/", (req, res) => {
  res.send("sikeres csatlakozás")
})

app.listen(port);
