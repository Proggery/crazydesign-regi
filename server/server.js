const express = require("express");
const app = express();
const port = process.env.PORT || 5555;
const cors = require("cors");
const bodyParser = require("body-parser");
const headerRouter = require('./routers/headerRouter')
const socialRouter = require('./routers/socialRouter')
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));

app.use("", headerRouter)
app.use("", socialRouter)

app.listen(port, () => {
  console.log(`A szerver fut: ${port}`);
});
