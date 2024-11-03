const express = require("express");
const router = express.Router();
const newMessageController = require("../controllers/newMessageController");

router.get("/", newMessageController.get);
module.exports = router;
