const router = require("express").Router();
const db = require("../db/connect");

const { PrismaClient } = require("@prisma/client");
const { header_config } = new PrismaClient();

router.get("/getHeader", async (req, res) => {
  const getHeaderData = await header_config.findMany({
    select: {
      title: true,
      sub_title: true,
    },
  });
  res.status(200).send(getHeaderData);
});

router.post("/createHeader", async (req, res) => {
  const { title, subTitle } = req.body;

  const newHeaderData = await header_config.create({
    data: {
      title: title,
      sub_title: subTitle,
    },
  });

  res.json(newHeaderData);
});

// router.get("/getHeader", async (req, res) => {
//   const myQuery = await "SELECT title, sub_title FROM header_config";

//   db.query(myQuery, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.status(200).send(result);
//   });
// });


router.put("/updateHeader/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  let { title, subTitle, defTitle, defSubTitle } = req.body;

  const updateHeaderData = await header_config.update({
    where: { id: id },
    data: { title: title, sub_title: subTitle },
  });
});

// router.put("/updateHeader/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   let { title, subTitle, defTitle, defSubTitle } = req.body;

//   if (title === "") {
//     title = " ";
//   } else if (subTitle === "") {
//     subTitle = " ";
//   }

//   if (title && subTitle) {
//     const myQuery = `UPDATE header_config SET title = '${title}',  sub_title = '${subTitle}' WHERE id=${id}`;

//     db.query(myQuery, (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.status(200).send({ message: "felhasználó módosítva" });
//     });
//   } else {
//     if (title) {
//       const myQuery = `UPDATE header_config SET title = '${title}' WHERE id=${id}`;

//       db.query(myQuery, (err, result) => {
//         if (err) {
//           console.log(err);
//         }
//         return res.status(200).send({ message: "felhasználó módosítva" });
//       });
//     }
//     if (subTitle) {
//       const myQuery = `UPDATE header_config SET sub_title = '${subTitle}' WHERE id=${id}`;

//       db.query(myQuery, (err, result) => {
//         if (err) {
//           console.log(err);
//         }
//         res.status(200).send({ message: "felhasználó módosítva" });
//       });
//     }
//   }
// });

// router.get("/", (req, res) => {
//   res.send("sikeres csatlakozás");
// });

module.exports = router;
