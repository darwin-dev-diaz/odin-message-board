const express = require("express");
const router = express.Router();
const registerController = require("../controllers/register.controller");

router.get("/", registerController.registerUser);
router.post("/register", registerController.createUser);

module.exports = router;
