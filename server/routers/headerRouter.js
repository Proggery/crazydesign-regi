const router = require("express").Router();
const db = require('../db/connect')

router.get("/getHeader", async (req, res) => {
  const myQuery = await "SELECT title, sub_title FROM header_config";

  db.query(myQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(result);
  });
});

router.post("/createHeader", (req, res) => {
  const { title, subTitle } = req.body;

  console.log(req.body);

  const myQuery = `INSERT INTO header_config (title, sub_title) VALUES ('${title}','${subTitle}')`;

  db.query(myQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200);
    }
  });
});

router.put("/updateHeader/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let { title, subTitle, defTitle, defSubTitle } = req.body;

  if (title === "") {
    title = " ";
  } else if (subTitle === "") {
    subTitle = " ";
  }

  if (title && subTitle) {
    const myQuery = `UPDATE header_config SET title = '${title}',  sub_title = '${subTitle}' WHERE id=${id}`;

    db.query(myQuery, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send({ message: "felhasználó módosítva" });
    });
  } else {
    if (title) {
      const myQuery = `UPDATE header_config SET title = '${title}' WHERE id=${id}`;

      db.query(myQuery, (err, result) => {
        if (err) {
          console.log(err);
        }
        return res.status(200).send({ message: "felhasználó módosítva" });
      });
    }
    if (subTitle) {
      const myQuery = `UPDATE header_config SET sub_title = '${subTitle}' WHERE id=${id}`;

      db.query(myQuery, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({ message: "felhasználó módosítva" });
      });
    }
  }
});

router.get("/", (req, res) => {
  res.send("sikeres csatlakozás");
});

module.exports = router;
