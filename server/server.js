const express = require("express");
const app = express();
const port = process.env.PORT || 5555;
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const db = mysql.createConnection({
//   host: "eu-cdbr-west-02.cleardb.net",
//   user: "bc341521121ea1",
//   password: "a6aee791",
//   database: "heroku_704ed3bca8e4c07",
// });

const db = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "root",
  password: "root",
  database: "crazydesign",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const myQuery = "INSERT INTO about (name, age) VALUES (?,?)";

  db.query(myQuery, [name, age], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send("sikeres felvétel az adatbázisba!");
    }
  });
});

app.get("/users", (req, res) => {
  const myQuery = "SELECT * FROM about";

  db.query(myQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/", (req, res) => {
  res.status(200).send("Sikeres csatlakozás!");
});

app.listen(port);
