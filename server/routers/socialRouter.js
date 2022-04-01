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
  const { socialPath, socialClass } = req.body;
  const datas = req.body.getSocial;

  // for (let i = 0; i < data.length; i++) {
  //   const element = data[i];
  //   console.log(element.id);
  // }

  if (!socialPath) {
    return res.send({ errorMessage: "Meg kell adnod az elérési utat!" });
  } else {
    if (datas.length > 4) {
      console.log("teszt");
    } else {
      datas.forEach((data) => {
        if (socialPath !== data.path) {
          const myQuery = `INSERT INTO social_config (path, class_name) VALUES ('${socialPath}','${socialClass}')`;

          db.query(myQuery, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.status(200).send({ message: "social icon létrehozva" });
            }
          });
        } else {
          return res.send({ message: "már létezik" });
        }
      });
    }

    // return res.send({ isFull: true });
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
    res.status(200).send({ message: "felhasználó törölve" });
  });
});

router.get("/", (req, res) => {
  res.send("sikeres csatlakozás");
});

module.exports = router;
