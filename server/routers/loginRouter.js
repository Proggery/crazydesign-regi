const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { account } = new PrismaClient();

router.get("/getLogin/:id", async (req, res) => {
  const id = parseInt(req.params.id);


  const user = await account.findUnique({
    where: { id },
    select: {
      username: true,
    },
  });
  res.send(user);
});

router.post("/createLogin", async (req, res) => {
  const { username, password } = req.body;

  const userExists = await account.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
      username: true,
      password: true,
    },
  });

  if (!userExists || password !== userExists.password) {
    return res.send({ error_message: "Hibás felhasználónév vagy jelszó!" });
  }

  res.send({ success_message: "Felhasználó létezik!", user: userExists });
});

router.put("/updateLogin/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  let { username, password } = req.body;

  console.log(id);
  console.log(req.body);

  if (username && password) {
    await account.update({
      where: { id: id },
      data: { username, password },
    });
    res.send({ success_message: "Felhasználónév és jelszó módosítva!" });
  }
});

module.exports = router;
