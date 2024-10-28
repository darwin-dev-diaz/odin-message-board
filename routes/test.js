const express = require("express");
const router = express.Router();
// const userController = require()
const testController = require("../controllers/testController");

router.get("/", testController.get);
module.exports = router;
