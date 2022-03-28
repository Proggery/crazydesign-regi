const express = require("express");
const app = express();
const port = process.env.PORT || 5555;
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// const db = mysql.createConnection({
//   host: "eu-cdbr-west-02.cleardb.net",
//   user: "b1cb66ffd9368e",
//   password: "822dff14",
//   database: "heroku_462665c36d4d83f",
// });

const db = mysql.createConnection({
  host: process.env.DB_HT,
  port: process.env.DB_PT,
  user: process.env.DB_UR,
  password: process.env.DB_PW,
  database: process.env.DB_DB,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("sikeres csatlakozás az adatbázishoz");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));

app.get("/getHeader", async (req, res) => {
  const myQuery = await "SELECT title, sub_title FROM header";

  db.query(myQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(result);
  });
});

app.post("/createHeader", (req, res) => {
  const { title, subTitle } = req.body;

  const myQuery = `INSERT INTO header (title, sub_title) VALUES ('${title}','${subTitle}')`;

  db.query(myQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200);
    }
  });
});

app.put("/updateHeader/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let { title, subTitle, defTitle, defSubTitle } = req.body;

  if (title === "") {
    title = " ";
  } else if (subTitle === "") {
    subTitle = " ";
  }

  if (title && subTitle) {
    const myQuery = `UPDATE header SET title = '${title}',  sub_title = '${subTitle}' WHERE id=${id}`;

    db.query(myQuery, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send({ message: "felhasználó módosítva" });
    });
  } else {
    if (title) {
      const myQuery = `UPDATE header SET title = '${title}' WHERE id=${id}`;

      db.query(myQuery, (err, result) => {
        if (err) {
          console.log(err);
        }
        return res.status(200).send({ message: "felhasználó módosítva" });
      });
    }
    if (subTitle) {
      const myQuery = `UPDATE header SET sub_title = '${subTitle}' WHERE id=${id}`;

      db.query(myQuery, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({ message: "felhasználó módosítva" });
      });
    }
  }
});

app.get("/", (req, res) => {
  res.send("sikeres csatlakozás");
});

app.listen(port, () => {
  console.log(`A szerver fut: ${port}`);
});
