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
  res.status(200).send(getHeaderData[0]);
});

router.post("/createHeader", async (req, res) => {
  const { title, subTitle } = req.body;

  const headerExists = await header_config.findUnique({
    where: {
      id: 1,
    },
  });

  if (headerExists) {
    return res.send({ error_message: "A header létezik!" });
  }

  if (!title && !subTitle) {
    res.send({ error_message: "Az egyik mező kitöltése kötelező!" });
  } else {
    await header_config.create({
      data: {
        title: title,
        sub_title: subTitle,
      },
    });

    res.send({ success_message: "Fejléc létrehozva!" });
  }
});

router.put("/updateHeader/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  let { title, subTitle } = req.body;

  const doesntChange = await header_config.findMany({
    select: {
      title: true,
      sub_title: true,
    },
  });

  if (
    title === doesntChange[0].title &&
    subTitle === doesntChange[0].sub_title
  ) {
    res.send({ error_message: "Fejléc nem módosult!" });
  } else {
    await header_config.update({
      where: { id: id },
      data: { title: title, sub_title: subTitle },
    });
    res.send({ success_message: "Fejléc módosítva!" });
  }
});

module.exports = router;
