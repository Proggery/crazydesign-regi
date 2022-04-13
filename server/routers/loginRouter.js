const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { account } = new PrismaClient();
const { hashedPassword, authPassword } = require("../config/hashPass");

router.get("/getLogin", async (req, res) => {
  const user = await account.findUnique({
    where: { id: 1 },
    select: {
      id: true,
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

  if (!userExists) {
    return res.send({ error_msg: "Hibás felhasználónév vagy jelszó!" });
  }
  if (userExists.password === null) {
    return res.send({ error_msg: "Hibás felhasználónév vagy jelszó!" });
  }
  const authPass = authPassword(password, userExists.password);
  
  if (authPass) {
    res.send({ success_msg: "Felhasználó létezik!", user: userExists });
  } else {
    res.send({ error_msg: "Hibás felhasználónév vagy jelszó!" });
  }
});

router.put("/updateLogin/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  let { username, password } = req.body;

  if (username && password) {
    const hashPass = hashedPassword(password);

    await account.update({
      where: { id: id },
      data: { username, password: hashPass },
    });
    res.send({ success_msg: "Adatok módosítva!" });
  }
});

module.exports = router;
