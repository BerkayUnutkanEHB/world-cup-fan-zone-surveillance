const express = require("express");

const detectionController = require("../controllers/detectionController");

const router = express.Router();

router.post("/", detectionController.createDetection);

module.exports = router;
