const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { social_config } = new PrismaClient();

router.get("/getSocial", async (req, res) => {
  const getSocialData = await social_config.findMany({
    select: {
      id: true,
      path: true,
      class_name: true,
    },
  });
  res.send(getSocialData);
});

router.post("/createSocial", async (req, res) => {
  const { socialPath, socialClass } = req.body;

  if (!socialPath) {
    return res.send({ error_message: "az útvonal megadása kötelező!" });
  } else {
    const exsistsData = await social_config.findUnique({
      where: {
        path: socialPath,
      },
    });
    if (exsistsData) {
      return res.send({ error_message: "létezik" });
    } else {
      const createSocialData = await social_config.create({
        data: {
          path: socialPath,
          class_name: socialClass,
        },
      });

      res.send({ success_message: "létrehozva!", createSocialData });
    }
  }
});

router.put("/updateSocial/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { socialPath } = req.body;

  await social_config.update({
    where: { id: id },
    data: { path: socialPath },
  });
  res.send({ success_message: "sikeres módosítás!" });
});

router.delete("/deleteSocial/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  await social_config.delete({
    where: { id: id },
  });
  res.send({ success_message: "sikeres törlés!" });
});

module.exports = router;
