const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const notificationRouter = require("./routes/notifications");
const authRouter = require("./routes/auth");
const uploadRouter = require("./routes/upload");
const mongoose = require("mongoose");
const helmet = require("helmet");
require("dotenv").config();

// CORS対策
app.use(cors());

// 脆弱性対策
app.use(helmet());

// データベース接続
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DB接続中・・・");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
