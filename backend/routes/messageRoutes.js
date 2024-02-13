const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
router.use(protect)
router.route("/:chatId").get(allMessages);
router.route("/").post(sendMessage);

module.exports = router;