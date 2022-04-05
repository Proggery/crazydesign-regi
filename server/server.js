const express = require("express");
const app = express();
const port = process.env.PORT || 5555;
const cors = require("cors");
const bodyParser = require("body-parser");
const headerRouter = require("./routers/headerRouter");
const socialRouter = require("./routers/socialRouter");
const uploadFileRouter = require("./routers/uploadFileRouter");
const userRouter = require("./routers/userRouter");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("uploads"));

app.use("", headerRouter);
app.use("", socialRouter);
app.use("", uploadFileRouter);
app.use("", userRouter);

app.get("/", (req, res) => {
  res.send("sikeres csatlakozás");
});

app.listen(port, () => {
  console.log(`A szerver fut: ${port}`);
});
