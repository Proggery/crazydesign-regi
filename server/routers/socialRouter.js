const router = require("express").Router();
const db = require("../db/connect");

router.get("/getSocial", async (req, res) => {
  const myQuery = await "SELECT * FROM social_config";

  db.query(myQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(result);
  });
});

router.post("/createSocial", (req, res) => {
  const { id, socialPath, socialClass } = req.body;

  console.log(req.body);

  if (id > 5) {
    return res.status(400).send({ message: "Csak 5 hozható létre!" });
  } else {
    const myQuery = `INSERT INTO social_config (path, class_name) VALUES ('${socialPath}','${socialClass}')`;

    db.query(myQuery, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send({ message: "felhasználó létrehozva" });
      }
    });
  }
});

router.put("/updateSocial/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let { socialPath } = req.body;

  const myQuery = `UPDATE social_config SET path = '${socialPath}' WHERE id=${id}`;

  db.query(myQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send({ message: "felhasználó módosítva" });
  });
});

router.delete("/deleteSocial/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const myQuery = `DELETE FROM social_config WHERE id=${id}`;
  db.query(myQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send({ message: "felhasználó módosítva" });
  });
});

router.get("/", (req, res) => {
  res.send("sikeres csatlakozás");
});

module.exports = router;
