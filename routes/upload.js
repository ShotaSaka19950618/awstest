const router = require("express").Router();
const isAuth = require("../middleware/isAuth");
// const fileUpload = require("../middleware/fileUpload");

// 画像upload
// router.post("/", isAuth, fileUpload.single("file"), (req, res) => {
router.post("/", isAuth, (req, res) => {
    try {
    return res.json({
      success: true,
      message: "画像をアップロードしました！",
    });
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
