const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { user_config } = new PrismaClient();

router.get("/getUser", async (req, res) => {
  const getUserData = await user_config.findMany({
    select: {
      title: true,
      sub_title: true,
    },
  });
  res.status(200).send(getUserData);
});

router.post("/createUser", async (req, res) => {
  const { title, subTitle } = req.body;

  console.log(title)
  console.log(subTitle)

  if (!title && !subTitle) {
    res.send({ error_message: "Az egyik mező kitöltése kötelező!" });
  } else {
    await user_config.create({
      data: {
        title: title,
        sub_title: subTitle,
      },
    });

    res.send({ success_message: "Felhasználó létrehozva!" });
  }
});

router.put("/updateUser/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  let { title, subTitle } = req.body;

  const doesntChange = await user_config.findMany({
    select: {
      title: true,
      sub_title: true,
    },
  });

  if (
    title === doesntChange[0].title &&
    subTitle === doesntChange[0].sub_title
  ) {
    res.send({ error_message: "Felhasználó nem módosult!" });
  } else {
    await user_config.update({
      where: { id: id },
      data: { title: title, sub_title: subTitle },
    });
    res.send({ success_message: "Felhasználó módosítva!" });
  }
});

module.exports = router;
