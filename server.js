const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const app = express();
// const userRouter = require("./routes/users");
// const postRouter = require("./routes/posts");
// const notificationRouter = require("./routes/notifications");
// const authRouter = require("./routes/auth");
// const uploadRouter = require("./routes/upload");

// CORS対策
app.use(cors());

// 脆弱性対策
app.use(helmet());



app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
