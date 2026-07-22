const express = require("express");

const supporterController = require("../controllers/supporterController");

const router = express.Router();

router.get("/", supporterController.getAllSupporters);

module.exports = router;
