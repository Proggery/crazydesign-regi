const router = require("express").Router();
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

router.put("/updateHeader/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  let { title, subTitle, defTitle, defSubTitle } = req.body;

  const updateHeaderData = await header_config.update({
    where: { id: id },
    data: { title: title, sub_title: subTitle },
  });
});

router.get("/", (req, res) => {
  res.send("sikeres csatlakozás");
});

module.exports = router;
